import './modal.css';

const Modal = ({
  handleTitle,
  handleDescription,
  handleSubmit,
  close,
  show,
  disable,
  message1,
  message2,
  title_value,
  input_description,
}) => {
  return !show ? null : (
    <>
      <div className="modal" onClick={close}>
        <form className="form" onClick={(e) => e.stopPropagation()}>
          <div className="form-content">
            <h2>
              <label htmlFor="title">Title</label>
            </h2>
            <input onChange={handleTitle} id="title" type="text" />
            <p style={{ display: message1 }}>Message</p>
          </div>
          <div className="form-content">
            <h2>
              <label htmlFor="description">Description</label>
            </h2>
            <textarea onChange={handleDescription} id="description"></textarea>
            <p style={{ display: message2 }}>Message2</p>
          </div>
          <div>
            <button className="close" onClick={close}>
              <i className="closeIcon fas fa-times-circle"></i>
            </button>
            <button disabled={disable} onClick={handleSubmit} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
