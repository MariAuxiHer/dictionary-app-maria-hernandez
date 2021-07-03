import React from "react";
import Synonyms from "./Synonyms";
import "./Definitions.css"

export default function Definitions(props){
    return(
        <div className="detailedInformation">
            <div>
              {props.info.partOfSpeech}
              </div>
              <br />
              <div>
              {props.info.definitions.map(function (infoDefinitionsItem, index) {
            return (
              <div key={index}>
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
        </div>
    )
}