import Star_wars from '../../components/Quotes/Star_wars';
import Famous_people from '../../components/Quotes/Famous_people';
import Saying from '../../components/Quotes/Saying';
import Humour from '../../components/Quotes/Humour';
import Motivational from '../../components/Quotes/Motivational';
import Layout from '../../components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/ModalWindow/Spinner/Spinner';
import EditForm from '../../components/EditForm/EditForm';
import { useHistory } from 'react-router-dom';


const Quotes = () => {
  const [loading, setLoading] = useState(false);
  const [starValue, setStarValue] = useState([]);
  const [famousValue, setFamousValue] = useState([]);
  const [sayingValue, setSayingValue] = useState([]);
  const [humourValue, setHumourValue] = useState([]);
  const [motivationalValue, setMotivationalValue] = useState([]);
  const [formValue, setFormValue] = useState(
    { input: '', textarea: '' }
  );
  const [select, setSelected] = useState({ value: '' });
  const [idEdit, setIdEdit] = useState('');
  const [editValue, setEditValue] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      setLoading(true)
      try {
        let responseStars = await axios.get('quotes.json?orderBy="category"&equalTo="star_wars"');
        let responseFamous = await axios.get('quotes.json?orderBy="category"&equalTo="famous_people"');
        let responseSaying = await axios.get('quotes.json?orderBy="category"&equalTo="saying"');
        let responseHumour = await axios.get('quotes.json?orderBy="category"&equalTo="humour"');
        let responseMotivational = await axios.get('quotes.json?orderBy="category"&equalTo="motivational"');
        Promise.all([
          responseStars, responseFamous, responseSaying, responseHumour, responseMotivational
        ]).then(results => {
          let starsArray = Object.keys(results[0].data).map(id => {
            return ({ ...results[0].data[id], id })
          });
          let famousArray = Object.keys(results[1].data).map(id => {
            return ({ ...results[1].data[id], id })
          });
          let sayingArray = Object.keys(results[2].data).map(id => {
            return ({ ...results[2].data[id], id })
          });
          let humourArray = Object.keys(results[3].data).map(id => {
            return ({ ...results[3].data[id], id })
          });
          let motivationalArray = Object.keys(results[4].data).map(id => {
            return ({ ...results[4].data[id], id })
          })
          setStarValue(starsArray);
          setFamousValue(famousArray);
          setSayingValue(sayingArray);
          setHumourValue(humourArray);
          setMotivationalValue(motivationalArray);
        })
      } catch (e) {
        console.error(e);
      }
    }
    fetchData().finally(() => setLoading(false))
  }, [setLoading])

  let removeQuoteStar = async id => {
    setLoading(true)
    let index = starValue.findIndex(i => i.id === id);
    let copyStar = [...starValue];
    await axios.delete('/quotes/' + copyStar[index].id + '.json')
      .then(response => console.log(response))
      .catch(console.error);
    setLoading(false)
  }

  let removeQuoteFamous = async id => {
    setLoading(true)
    let index = famousValue.findIndex(i => i.id === id);
    let copyArray = [...famousValue];
    await axios.delete('/quotes/' + copyArray[index].id + '.json')
      .then(response => console.log(response))
      .catch(console.error)
    setLoading(false)
  }
  let removeQuoteSaying = async id => {
    setLoading(true)
    let index = sayingValue.findIndex(i => i.id === id);
    let copyArray = [...sayingValue];
    await axios.delete('/quotes/' + copyArray[index].id + '.json')
      .then(response => console.log(response))
      .catch(console.error)
    setLoading(false)
  }
  let removeQuoteHumour = async id => {
    setLoading(true)
    let index = humourValue.findIndex(i => i.id === id);
    let copyArray = [...humourValue];
    await axios.delete('/quotes/' + copyArray[index].id + '.json')
      .then(response => console.log(response))
      .catch(console.error)
    setLoading(false)
  }
  let removeQuoteMotivational = async id => {
    setLoading(true)
    let index = motivationalValue.findIndex(i => i.id === id);
    let copyArray = [...motivationalValue];
    await axios.delete('/quotes/' + copyArray[index].id + '.json')
      .then(response => console.log(response))
      .catch(console.error)
    setLoading(false)
  }
  let changeSelect = (e) => {
    setSelected({ value: e.target.value })
  };
  let changeQuoteValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValue({ ...formValue, [name]: value })
  };
  let submitQuoteForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let fetchData = async () => {
      try {
        if (select.value !== '') {
          let changeValue = {
            "author": formValue.input,
            "category": select.value,
            "text": formValue.textarea
          };
          await axios.post('/quotes.json', changeValue);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchData().finally(() => setLoading(false))
  }
  let formEdit = (id) => {
    setIdEdit(id);
    return history.push('/quotes/' + id + '/edit')
  }
  let renderAll = () => {
    return <>
      <Star_wars array={starValue} delete={removeQuoteStar} edit={formEdit} />
      <Famous_people array={famousValue} delete={removeQuoteFamous} edit={formEdit} />
      <Saying array={sayingValue} delete={removeQuoteSaying} edit={formEdit} />
      <Humour array={humourValue} delete={removeQuoteHumour} edit={formEdit} />
      <Motivational array={motivationalValue} delete={removeQuoteMotivational} edit={formEdit} />
    </>
  }
  let submitEditForm = (e) => {
    e.preventDefault();
    let fetchData = async () => {
      setLoading(true)
      try {
        if (select.value !== '') {
          let value = { author: editValue.author, text: editValue.text, category: select.value }
           await axios.put('quotes/' + idEdit + '.json', value);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchData().finally(() => setLoading(false))
  }

  let history = useHistory();

  useEffect(() => {
    setLoading(true);
    let fetchData = async () => {
      try {
        let response = await axios.get('/quotes/' + idEdit + '.json');
        setEditValue(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData().finally(() => setLoading(false))
  }, [idEdit])

  let changeEditValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    setEditValue({ ...editValue, [name]: value })
  }
  return (
    <div className="Quotes">
      <Layout>
        {loading ? <Spinner /> : null}
        <Switch>
          <Route path='/' exact render={() => { return renderAll() }} />
          <Route path='/quotes' exact render={() => { return renderAll() }} />
          <Route path='/quotes/all' render={() => { return renderAll() }} />
          <Route path='/quotes/star_wars' render={() => {
            return <Star_wars
              array={starValue}
              delete={removeQuoteStar}
              setArray={idEdit}
              edit={(id) => formEdit(id)}
            />
          }} />
          <Route path='/quotes/famous_people' render={() => {
            return <Famous_people
              array={famousValue}
              delete={removeQuoteFamous}
              edit={formEdit}
            />
          }} />
          <Route path='/quotes/saying' render={() => {
            return <Saying
              array={sayingValue}
              delete={removeQuoteSaying}
              edit={formEdit}
            />
          }} />
          <Route path='/quotes/humour' render={() => {
            return <Humour
              array={humourValue}
              delete={removeQuoteHumour}
              edit={formEdit}
            />
          }} />
          <Route path='/quotes/motivational' render={() => {
            return <Motivational
              array={motivationalValue}
              delete={removeQuoteMotivational}
              edit={formEdit}
            />
          }} />
          <Route path='/quotes/:id/edit'
            render={() => {
              return <EditForm
                submit={(e, id) => submitEditForm(e, id)}
                valueInput={editValue.author}
                valueTextarea={editValue.text}
                input='author'
                textarea='text'
                change={changeEditValue}
                selectValue={select.value}
                changeSelect={changeSelect}
                star_wars='star_wars'
                famous_people='famous_people'
                humour='humour'
                saying='saying'
                motivational='motivational'
              />
            }}
          />
          <Route path='/add_quote' render={() => {
            return <AddForm
              change={changeQuoteValue}
              submit={submitQuoteForm}
              input='input'
              textarea='textarea'
              changeSelect={changeSelect}
              selectValue={select.value}
              star_wars='star_wars'
              famous_people='famous_people'
              humour='humour'
              saying='saying'
              motivational='motivational'
            />
          }} />
          <Route render={() => { return <p>Page not found</p> }} />
        </Switch>
      </Layout>
    </div>
  );
}

export default Quotes;
