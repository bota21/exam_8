import './AddForm.css';

const AddForm = props => {
  return <form onSubmit={props.submit}>
    <div className="form_wrapper">
      <h2>Submit new quote</h2>
      <div className="form_wrapper_input">
        <label htmlFor="select">Category</label>
        <select name="" id="select">
          <option value="">Choose one of category</option>
          <option value="star-wars">Star wars</option>
          <option value="famous-people">Famous people</option>
          <option value="saying">Saying</option>
          <option value="humour">Humour</option>
          <option value="motivational">Motivational</option>
        </select>
      </div>
      <div className="form_wrapper_input">
        <label htmlFor="input">Author</label>
        <input type="text" id='input' name={props.name} onChange={props.change} />
      </div>
      <div className="form_wrapper_input">
        <label htmlFor="textarea">Quote text</label>
        <textarea name={props.textarea} onChange={props.change} id="textarea"></textarea>
      </div>
      <button>Save</button>
    </div>
  </form>
}

export default AddForm