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

      <div className="dictionaryBody">
      <DictionarySearchEngine word={"hello"}/>
      </div>

      <GitHubLink/>
      </div>
    </div>
  );
}

export default DictionaryApp;
