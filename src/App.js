import Todo from "./components/Todos";


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='first Todo'/>
      <Todo text='second Todo'/>
      <Todo text='third Todo'/>
    </div>
  );
}

export default App;
