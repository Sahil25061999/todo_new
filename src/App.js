import './App.css';
import { useState, useEffect } from 'react';
import ADD from './Components/Add/Add';
// import CARDLIST from './Components/CardList/CardList';
import CARD from './Components/Card/Card';
import Modal from './Components/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todo, setTodo] = useState([]);
  const [disable, setDisable] = useState(true);
  const [message1, setMessage1] = useState('none');
  const [message2, setMessage2] = useState('none');
  useEffect(() => {
    if (
      title.replace(/\s/g, '').length !== 0 &&
      desc.replace(/\s/g, '').length !== 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [title, desc]);

  function handleTitle(e) {
    let input_title = e.target.value;
    setTitle(input_title);
    if (input_title.replace(/\s/g, '').length === 0) {
      setMessage1('block');
    } else {
      setMessage1('none');
    }
  }

  function handleDescription(e) {
    let input_desc = e.target.value;
    setDesc(input_desc);
    if (input_desc.replace(/\s/g, '').length === 0) {
      setMessage2('block');
    } else {
      setMessage2('none');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodo((prevItem) => [
      { id: uuidv4(), title: title, desc: desc },
      ...prevItem,
    ]);
    setShow(false);
    setMessage1('none');
    setMessage2('none');
  }

  return (
    <>
      <header>
        <h2>Todo</h2>
      </header>
      <div className="App">
        <ADD click={() => setShow(true)} />
        {/* <CARDLIST todo={todo} /> */}
        {todo.map((item) => {
          return (
            <CARD
              id={item.id}
              title={item.title}
              desc={item.desc}
              todo={todo}
              setTodo={setTodo}
            />
          );
        })}
        <Modal
          handleTitle={handleTitle}
          handleDescription={handleDescription}
          handleSubmit={handleSubmit}
          close={() => {
            setShow(false);
            setMessage2('none');
            setMessage1('none');
          }}
          show={show}
          disable={disable}
          message1={message1}
          message2={message2}
        />
      </div>
    </>
  );
}

export default App;
