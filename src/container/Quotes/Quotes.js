import All from '../../components/Quotes/All';
import Star_wars from '../../components/Quotes/Star_wars';
import Famous_people from '../../components/Quotes/Famous_people';
import Saying from '../../components/Quotes/Saying';
import Humour from '../../components/Quotes/Humour';
import Motivational from '../../components/Quotes/Motivational';
import Layout from '../../components/Layout/Layout';
import './Quotes.css';
import { Route, Switch } from 'react-router-dom';
import AddForm from '../../components/AddForm/AddForm';

const Quotes = () => {
  return (
    <div className="Quotes">
      <Layout>
        <Switch>
          <Route path='/' exact render={() => { return <All /> }} />
          <Route path='/quotes' exact render={() => { return <All /> }} />
          <Route path='/quotes/all' render={() => { return <All /> }} />
          <Route path='/quotes/star-wars' render={() => { return <Star_wars /> }} />
          <Route path='/quotes/famous-people' render={() => { return <Famous_people /> }} />
          <Route path='/quotes/saying' render={() => { return <Saying /> }} />
          <Route path='/quotes/humour' render={() => { return <Humour /> }} />
          <Route path='/quotes/motivational' render={() => { return <Motivational /> }} />
          <Route path='/add-quote' render={() => {
            return <AddForm />
          }} />
          <Route render={() => { return <p>Page not found</p> }} />
        </Switch>
      </Layout>
    </div>
  );
}

export default Quotes;
