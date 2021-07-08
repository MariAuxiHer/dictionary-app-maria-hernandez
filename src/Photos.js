import React from "react";
import "./Photos.css";

export default function Photos(props){
    /*<div className="Photos">
<img src={props.photo.src.landscape} alt="wordPhoto"/>
        </div>*/ 
    if(props.photo){
    return(
        <span>
<img src={props.photo.src.landscape} alt="wordPhoto" className="photosColumns"/>
        </span>
            )}

            else {
                return null;
            }

}