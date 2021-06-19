import React, {useState} from "react";
import axios from "axios";

export default function DictionarySearchEngine(props){
  let [loaded, setLoaded] = useState(false);
    let [word, setWord] = useState(props.word);
    let [information, setInformation] = useState({});

    /*<form id="submit-word" onSubmit={handleSubmit}>
    <input
    type="search"
    placeholder="Type a City"
    id="enter-city"
    autoComplete="off"
    autoFocus="on"
    onChange={updteWord}
    />

     <i
            className="fas fa-street-view"
            id="location-button"
            onClick={getLocation}
          >
            {" "}
          </i>

  

   <input type="submit" value="Search" id="search-button" />
   <i className="fa fa-arrow-circle-right fa-lg" onClick={hello}></i>  
   */

  function searchWordInfo (response){
    console.log(response);
    console.log(response.data[0]);
    console.log(response.data[0].word);
    console.log(response.data[0].phonetics);
    console.log(response.data[0].meanings);
  }


  function searchWord(){
    let ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(ApiUrl).then(searchWordInfo);
  }

  function callAPI(event){
    event.preventDefault();
    searchWord();
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  if (loaded){
    return (
    <div>
        <div className="row">
        <div className="col-1">
          <i className="fas fa-city"></i>
        </div>

        <div className="col-10">
          <form id="submit-word">
            <input
              type="search"
              placeholder="Type a Word"
              id="enter-word"
              autoComplete="off"
              autoFocus="on"
              onChange={updateWord}
            />
          </form>
        </div>
        <div className="col-1">
        <button type="submit" className="btn btn-success" onClick={callAPI} >
    <i className="fa fa-arrow-circle-right fa-lg"></i> Next
</button>
        </div>
    </div>
    </div>
    )
}


else {
  searchWord();
return(
  ""
)
}

}