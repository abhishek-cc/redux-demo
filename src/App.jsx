import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <div>
          <h2>Articles</h2>
          <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
}

export default App;
