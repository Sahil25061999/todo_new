import './card.css';
import Modal from '../Modal/Modal';
const CARD = ({ id, title, desc, todo, setTodo, show, setShow }) => {
  const handleClick = () => {
    setShow(true);
  };

  const handleDelete = () => {
    setTodo(
      todo.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  };
  return (
    <div className="card" onClick={handleClick}>
      <h3>title:</h3>
      <p>{title}</p>
      <h3>description:</h3>
      <p>{desc}</p>
      <button onClick={handleDelete} className="delete_button">
        <i className="trash fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
export default CARD;
