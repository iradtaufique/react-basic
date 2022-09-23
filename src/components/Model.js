function Modal(props){

    // fucntion that will close model when cancel button clicked
    function cancelHandler(){
        props.onCancelButton();
    }

    // fucntion that will close model when confirm button clicked
    function confirmHandler(){
        props.onConfirm();
    }
    return (
        <div className="modal">
            <p>Are You sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;