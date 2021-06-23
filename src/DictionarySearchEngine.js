import React, {useState} from "react";
import axios from "axios";

export default function DictionarySearchEngine(props){
  let [loaded, setLoaded] = useState(false);
    let [word, setWord] = useState(props.word);
    let [info, setInfo] = useState(null);

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


   {infoDefinitionsItem.synonyms.map(function (infoSynonymItem, index){
              return(
                <div key={index}>
              {infoSynonymItem}
              </div>
              )})}

               <div>
              {infoDefinitionsItem.synonyms.map(function (infoSynonymItem, index){
              return(
                <div key={index}>
              {infoSynonymItem}
              </div>
              )})}
              </div>

   */

  function searchWordInfo (response){
    console.log(response);
    console.log(response.data[0]);
    setInfo(response.data[0]);
    /*console.log(response.data[0].word); //**** 
    console.log(response.data[0].phonetics);
    console.log(response.data[0].meanings);*/
    setLoaded(true);
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
          <form id="submit-word" onSubmit={callAPI}>
            <input
              type="search"
              placeholder="Type a Word"
              id="enter-word"
              autoComplete="off"
              autoFocus="on"
              onChange={updateWord}
            />
             <input
              type="submit"
              value="Search"
            />
          </form>
        </div>
  <div>
{info.word}
  </div>

  <div>
  {info.phonetics.map(function (infoPhoneticItem, index) {
            return (
              <div key={index}>
              {infoPhoneticItem.text}
              <br />
              </div>
              
              )})}
  </div>

  <br />
  <br /> 
  <br />
  <br /> 

  <div className="row" id="detailed-information">
  {info.meanings.map(function (infoItem, index) {
            return (
              <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
              <div>
              {infoItem.partOfSpeech}
              </div>
              <br />
              <div>
              {infoItem.definitions.map(function (infoDefinitionsItem, index) {
            return (
              <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
              <div>
              {infoDefinitionsItem.definition}
              </div>


              <div>
              {infoDefinitionsItem.example}
              </div>

              </div>
              )})}
              
              </div>

              </div>
              )})}
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