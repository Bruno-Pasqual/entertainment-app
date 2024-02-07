import './App.css';
import Navbar from './Components/Navbar';
import data from './data.json';

function App() {
  console.log(data);

  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
