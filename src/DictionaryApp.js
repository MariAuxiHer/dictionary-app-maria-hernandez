import './DictionaryApp.css';
import GitHubLink from "./GitHubLink";
import DictionarySearchEngine from "./DictionarySearchEngine";

function DictionaryApp() {
  return (
    <div className="container">
    <div className="DictionaryApp">
    
      <header className="App-header">
      Dictionary App
      </header>

      <DictionarySearchEngine/>

      <GitHubLink/>
      </div>
    </div>
  );
}

export default DictionaryApp;
