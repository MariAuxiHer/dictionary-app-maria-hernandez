import React, {useState} from "react";

export default function DictionarySearchEngine(){
    let [word, setWord] = useState("");

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

   function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function hello(event){
    event.preventDefault();
      alert(`The word is ${word}`);
  }
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
        <button type="submit" className="btn btn-success" onClick={hello} >
    <i className="fa fa-arrow-circle-right fa-lg"></i> Next
</button>
        </div>
    </div>
    </div>
    )
}