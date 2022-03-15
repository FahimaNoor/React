import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Wake Up' />
      <Todo text='Eat'/>
      <Todo text='Sleep'/>
      <Modal/>
      <Backdrop/>

    </div>
  );
}

export default App;
