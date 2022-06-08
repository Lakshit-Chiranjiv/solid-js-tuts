import logo from './logo.svg';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>SOLID JS</h1>
      {/* static text */}
      <div className={styles.staticTxt}>
        <h1>Static Text</h1>
        <h3>Hello Solid JS</h3>
      </div>

    </div>
  );
}

export default App;
