import { useState } from "react";
import Modal from "./Model";
import BackDrop from "./Backdrop";



function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);

  // create a fucntion that will be executed when delete button clicked
  function deleteHandler() {
    setModelIsOpen(true);
  }

  // function that will close model when you click on backdrop
  function closeModelHandler(){
    setModelIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* you can use this option of terniary operator to call model { modalIsOpen ? <Model /> : null} */}
      {modalIsOpen && <Modal onCancelButton={closeModelHandler} onConfirm={closeModelHandler} /> }

      {modalIsOpen && <BackDrop onCancel={closeModelHandler} />}
    </div>
  );
}
export default Todo;
