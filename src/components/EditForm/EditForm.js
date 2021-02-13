import './EditForm.css';

const EditForm = props => {
  return <form onSubmit={props.submit}>
    <div className="form_wrapper">
      <h2>Submit new quote</h2>
      <div className="form_wrapper_input">
        <label htmlFor="select">Category</label>
        <select value={props.selectValue} id="select" onChange={props.changeSelect}>
          <option value="">Choose one of category</option>
          <option value={props.star_wars}>Star wars</option>
          <option value={props.famous_people}>Famous people</option>
          <option value={props.saying}>Saying</option>
          <option value={props.humour}>Humour</option>
          <option value={props.motivational}>Motivational</option>
        </select>
      </div>
      <div className="form_wrapper_input">
        <label htmlFor="input">Author</label>
        <input type="text" id='input' name={props.input} onChange={props.change} />
      </div>
      <div className="form_wrapper_input">
        <label htmlFor="textarea">Quote text</label>
        <textarea name={props.textarea} onChange={props.change} id="textarea"></textarea>
      </div>
      <button>Save</button>
    </div>
  </form>
}

export default EditForm