import styles from './App.module.css';
import Hello from './components/Hello'
import { createSignal,createEffect } from "solid-js";

function App() {

  const name = "Lakshit"
  const element = (<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>)

  const [greet,setGreet] = createSignal('Good Morning');
  const [rating,setRating] = createSignal(100);
  const [number,setNumber] = createSignal(10);

  setTimeout(()=>{
    setGreet("Good Night")
    setRating((prev) => prev+100)
  },5000)

  createEffect(() => {
    console.log("The number is now", number());
  });

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
        <h3>{greet()}</h3>
        <h3>{rating()}</h3>
      </div>

      {/* Effects */}
      <div className={styles.box5}>
        <h1>Effects</h1>
        <h3>number = {number()}</h3>
        <button onClick={()=> number()===10?setNumber(20):setNumber(10)}>Change number</button>
      </div>

    </div>
  );
}

export default App;
