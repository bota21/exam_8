import './Quotes.css';

const Star_wars = props => {
  let renderComponent = props.array.map(item => {
    return <div className='quotes' key={item.id}>
    <div className="quotes_wrapper">
    <h4>&mdash; {item.author}</h4>
    <p>{item.text}</p>
  </div>
  <div className="quotes_wrapper">
    <button onClick={() => props.edit(item.id)}>Edit</button>
    <button onClick={() => props.delete(item.id)}>Delete</button>
  </div>
  </div>
  })
  return <>
    {renderComponent}
  </>
}

export default Star_wars