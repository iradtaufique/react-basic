function Todo(props) {

    // create a fucntion that will be executed when delete button clicked
    function deleteHandler(){

    }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}
export default Todo;
