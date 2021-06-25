import React from "react";

export default function Synonyms(props){
 
                if (props.synonyms) {
                return(
                    <div>
                        <strong>Synonyms:</strong>
                    <ul>
                    {props.synonyms.map(function (infoSynonymItem, index){
                    return(
                      <li key={index}>
                    {infoSynonymItem}
                    </li>
                    )})}
                    </ul>
                    </div>
                );
                }

                else {
                return(
                  null
                );

              }
            }
     
