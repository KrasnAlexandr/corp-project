import {useState} from "react";
import style from './Counter.module.scss'

export const Counter = () => {
  const [ count,setCount] = useState<number>(0);

  const increment = () => {
    setCount(value => value + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={style.button}>Incr</button>
    </div>
  );
};
