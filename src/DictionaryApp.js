import './DictionaryApp.css';
import GitHubLink from "./GitHubLink";

function DictionaryApp() {
  return (
    <div className="container">
    <div className="DictionaryApp">
    
      <header className="App-header">
      Dictionary App
      </header>

      <button type="button" className="btn btn-primary">Primary</button>

      <GitHubLink/>
      </div>
    </div>
  );
}

export default DictionaryApp;
