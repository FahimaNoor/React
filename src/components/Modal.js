function Modal(props) {
  function cancelHandler() {
    props.onConfirm();
  }
  function confirmHandler() {
    props.onClose()
    
  }

  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className='btn btn--alt' onClick={confirmHandler}>
        Cancel
      </button>
      <button className='btn' onClick={cancelHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
