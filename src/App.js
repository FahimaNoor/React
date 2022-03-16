import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Wake Up' />
      <Todo text='Eat'/>
      <Todo text='Sleep'/>
    </div>
  );
}

export default App;
