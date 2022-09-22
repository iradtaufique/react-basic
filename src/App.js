import Todo from "./components/Todos";
import BackDrop from './components/Backdrop';
import Modal from './components/Model';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='first Todo'/>
      <Todo text='second Todo'/>
      <Todo text='third Todo'/>

      <Modal />
      <BackDrop />

    </div>
  );
}

export default App;
