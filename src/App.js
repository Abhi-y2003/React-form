import logo from './logo.svg';
import './App.css';

function App() {

  function changeFirstNameHandler(event){
    console.log(event.target.value);
  }

  function changeLastNameHandler(event){
    console.log(event.target.value);
  }


  return (
    <div className='App'>
      <form>
        <input type='text' placeholder='First name'
        onChange={changeFirstNameHandler}>
        </input>

        <input type='text' placeholder='Second name'
        onChange={changeLastNameHandler}>
        </input>

      </form>
    </div>
  );
}

export default App;
