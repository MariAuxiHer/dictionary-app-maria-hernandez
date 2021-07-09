import React, {useState} from "react";
import axios from "axios";
import Phonetics from "./Phonetics";
import Definitions from "./Definitions";
import Photos from "./Photos";
import  "./DictionarySearchEngine.css";

export default function DictionarySearchEngine(props){
  let [loaded, setLoaded] = useState(false);
    let [word, setWord] = useState(props.word);
    let [info, setInfo] = useState(null);
    let [photo, setPhoto] = useState(null);

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

              //problems: 1. Not every "definitions" have synonyms... 2. Those that have synonyms are arrays, not simple text so the sole {infoSynonymItem} won't do anything. 
              
              {
                if ("hola"=== "hola") {
                return(
                  <div>
                  </div>
                )
                }

                else {
                return(
                  <div>
                  </div>
                )

              }}
              
              I may need to use a For Loop for this one... Try again with the map function, try to detect some problem, and if I cannot find anything try with for.. If I'm unsuccesful, chech SheCodes Video about it 

              {
    function playAudio(event) {
        event.preventDefault();
        let audio = new Audio(props.phonetic.audio);

        audio.play();
    }
    
    return (
        <div className="Phonetics">
            <span className="playButton" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
            </span>
            <span className="transcription">{props.phonetic.text}</span>
        </div>
    )
}

<div className="col-xl-6 col-lg-6 col-md-6 col-6">

<audio controls>
<source src={infoPhoneticItem.audio} type="audio/mp3"/>
</audio>

<a href={infoPhoneticItem.audio}>
<i className="fas fa-city"></i>
</a>

<audio id="player" src={infoPhoneticItem.audio}></audio>
    <div>
         <a href="/" onclick={playAudio}><i class='fa fa-volume-up fa-2x'></i></a>
     </div>

</div>

<div className="col-xl-6 col-lg-6 col-md-6 col-6">
              {infoPhoneticItem.text}
              </div>

               <audio id="myAudio">
            <source src={props.phonetic} type="audio/mp3"/>
            </audio>

         <a href={"/"}><i class='fa fa-volume-up fa-2x' onclick={playAudio}></i></a>

          <div>
              {infoItem.partOfSpeech}
              </div>
              <br />
              <div>
              {infoItem.definitions.map(function (infoDefinitionsItem, index) {
            return (
              <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
              <div>
              <strong>Definition:</strong> {infoDefinitionsItem.definition}
              </div>

              <div>
             <Synonyms synonyms ={infoDefinitionsItem.synonyms}/>
              </div>

              <div>
              <strong>Examples:</strong> "{infoDefinitionsItem.example}"
              </div>

              </div>
              )})}
              
              </div>
              <br />


                <div className="row">
  {
  photo.map(function (photoItem, index){
    return(
      <div className="col-4" key={index}>
        <Photos photo={photoItem}/>
      </div>
    )
  })
}
</div>

             
   */


             
  function searchWordInfo (response){
    console.log(response);
    console.log(response.data[0].word);
    setInfo(response.data[0]);
    
    /*console.log(response.data[0].word); //**** 
    console.log(response.data[0].phonetics);
    console.log(response.data[0].meanings);*/

    //let keyApiPexels = "563492ad6f91700001000001ea1bf893d00941b48ab07d530c49812f";
    //let keyApiPexels = "563492ad6f917000010000010197e68003ac45a0a5e4e43c92264c9f";
    //let keyApiPexels = "563492ad6f917000010000012bfd4b83c3d04cf1a554822f164a8abd";
    let keyApiPexels = "563492ad6f91700001000001746a4e3b0bae445487bd377d8861773a";
    let urlPexels = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=6`;
    axios.get(urlPexels, 
    { headers: {"Authorization" : `Bearer ${keyApiPexels}`}}).then(searchPhotos);

   
  }

  function searchPhotos(response){
    setPhoto(response.data.photos);
     setLoaded(true);
  }



  function searchWord(){
    let ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(ApiUrl).then(searchWordInfo);
    console.log(ApiUrl);

    //let keyApiPexels = "563492ad6f91700001000001ea1bf893d00941b48ab07d530c49812f";
    //let urlPexels = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    //axios.get(urlPexels, 
    //{ headers: {"Authorization" : `Bearer ${keyApiPexels}`}}).then(searchPhotos);
  }

  function callAPI(event){
    event.preventDefault();
    searchWord();
  }

  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

 /* function load(){
    searchWord();
    setLoaded(true);
  }*/


  if (loaded){
    return (
    <div>
        <div className="row" id="searchForm">
        <div className="col-1">
        <i className="fas fa-book"></i>
        </div>

        <div className="col-11">
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
        </div>

    
  <div className="wordAndPhonetics">   
  
<span className="searchedWord">
{info.word}
</span> 
  <br/>

{info.phonetics.map(function (infoPhoneticItem, index) {
            return (
              <div key={index}>
<Phonetics phonetic={infoPhoneticItem}/>
              </div>
              )})}
 
  </div>           

  <div>
  {info.meanings.map(function (infoItem, index) {
            return (
              <div key={index}>
                <Definitions info={infoItem}/>
              </div>
              )})}
  </div>

<div className="photosSection">
  <div className="row">
  {
  photo.map(function (photoItem, index){
    return(
      <div className="col-4" key={index}>
        <Photos photo={photoItem}/>
      </div>
    )
  })
}
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