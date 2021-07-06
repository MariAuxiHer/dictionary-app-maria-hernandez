import React from "react";
import Synonyms from "./Synonyms";
import "./Definitions.css"

export default function Definitions(props){
    return(
        <div className="detailedInformation">
            <div>
              <span className="partOfSpeech">{props.info.partOfSpeech}</span>
              </div>
              <br />
              <div className="definitions">
              {props.info.definitions.map(function (infoDefinitionsItem, index) {
            return (
              <div key={index}>
              <div>
              <strong>Definition:</strong> {infoDefinitionsItem.definition}
              </div>
              <br />
              <div>
             <Synonyms synonyms ={infoDefinitionsItem.synonyms}/>
              </div>
             
              <div>
              <strong>Examples:</strong> "{infoDefinitionsItem.example}"
              </div>

              </div>
              )})}
              
              </div>
              
        </div>
    )
}