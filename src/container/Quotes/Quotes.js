import All from '../../components/Quotes/All';
import Star_wars from '../../components/Quotes/Star_wars';
import Famous_people from '../../components/Quotes/Famous_people';
import Saying from '../../components/Quotes/Saying';
import Humour from '../../components/Quotes/Humour';
import Motivational from '../../components/Quotes/Motivational';
import Layout from '../../components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';
import { useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/ModalWindow/Spinner/Spinner';

const Quotes = () => {
  const [loading, setLoading] = useState(false)
  const [formValue, setFormValue] = useState(
    {input: '', textarea: '' }
  );
  const [select, setSelected] = useState({ value: '' })

  let changeSelect = (e) => {
    setSelected({ value: e.target.value })
  }
  let changeQuoteValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValue({ ...formValue, [name]: value })
  }
  let submitQuoteForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let fetchData = async () => {
      try {
        if(select.value !== '') {
          let changeValue = {"author": formValue.input,
          "category": select.value,
           "text": formValue.textarea };          
        await axios.post('/quotes.json', changeValue);
        }        
      } catch (e) {
        console.error(e);
      }
    }
    fetchData().finally(() => setLoading(false))
  }

  return (
    <div className="Quotes">
      <Layout>
      {loading ? <Spinner /> : null}
        <Switch>
          <Route path='/' exact render={() => { return <All /> }} />
          <Route path='/quotes' exact render={() => { return <All /> }} />
          <Route path='/quotes/all' render={() => { return <All /> }} />
          <Route path='/quotes/star_wars' render={() => { return <Star_wars /> }} />
          <Route path='/quotes/famous_people' render={() => { return <Famous_people /> }} />
          <Route path='/quotes/saying' render={() => { return <Saying /> }} />
          <Route path='/quotes/humour' render={() => { return <Humour /> }} />
          <Route path='/quotes/motivational' render={() => { return <Motivational /> }} />
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
