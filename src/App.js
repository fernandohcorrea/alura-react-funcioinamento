import './App.css';
import ListaDeNotas from './components/ListaDeNotas'

function App() {
  return (
    <section>
      <form>
        <input type='text' placeholder='Enter Title' />
        <textarea placeholder="Note"></textarea>
        <input type='button' name='Send' value='Send' />
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;