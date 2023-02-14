
import './App.css';
import Image from "./assets/i1.jpeg";
import Demo from './components/Demo';

function App() {
  var x=10;
  var text;
  if(x===20) {
    text = "Equal";
  }else{
    text = "Not equal";
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>{50 + 5}</h2>
      <img src={Image} alt="pic" width="50%" />
      <h2>{text}</h2>
      <h3>{x >=10 ? "greater than or equal to 10 ":"not equal to 10"}</h3>
      <Demo para={text}/>
    </div>
  );
}

export default App;
