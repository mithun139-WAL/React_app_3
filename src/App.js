// import logo from './logo.svg';
import './App.css';
import Comment from './Comment'
import Ecommerce from './Ecommerce';
import Forum from './Forum';
function App() {
  return (
    <><div className="App">
      <h1>Welcome to react</h1>
      <div className="App-div">Assignments 8 Feb 2022</div>
    </div>
      <Comment></Comment>
      <Ecommerce></Ecommerce>
      <Forum
        topic='What is React'
      >

      </Forum>
    </>
  );
}

export default App;
