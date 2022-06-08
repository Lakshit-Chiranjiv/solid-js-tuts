import styles from './App.module.css';
import Hello from './components/Hello'
import { createSignal } from "solid-js";

function App() {

  const name = "Lakshit"
  const element = (<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>)

  const [greet,setGreet] = createSignal('Good Morning');
  const [rating,setRating] = createSignal(100);

  setTimeout(()=>{
    setGreet("Good Night")
    setRating((prev) => prev+100)
  },5000)

  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>SOLID JS</h1>
      {/* static text */}
      <div className={styles.box1}>
        <h1>Static Text</h1>
        <h3>Hello Solid JS</h3> 
      </div>

      {/* dynamic text & content | fragments */}
      <div className={styles.box2}>
        <h1>Dynamic text & content | Fragments</h1>
        <>
          <h3>My name is {name}</h3>
          {element}
        </>
      </div>

      {/* Components */}
      <div className={styles.box3}>
        <h1>Components</h1>
        <Hello/>
      </div>

      {/* Signals */}
      <div className={styles.box4}>
        <h1>Signals</h1>
        <h3>{greet}</h3>
        <h3>{rating}</h3>
      </div>

    </div>
  );
}

export default App;
