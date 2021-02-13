import './Quotes.css';

const Famous_people = props => {
  return <div className='quotes'>
    <div className="quotes_wrapper">
      <h4>&mdash; {props.title}</h4>
      <p>{props.text}</p>
    </div>
    <div className="quotes_wrapper">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
}

export default Famous_people