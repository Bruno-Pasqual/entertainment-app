import './App.css';
import data from './data.json';
import { nanoid } from 'nanoid';

function App() {
  console.log(data);

  return (
    <>
      {data.map((dados) => {
        return (
          <img src={dados.thumbnail.regular.large} alt="" key={nanoid()} />
        );
      })}
    </>
  );
}

export default App;
