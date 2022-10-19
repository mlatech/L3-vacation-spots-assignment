import React from "react"


export default function Card(props){
    return(
        <div className="card">
        <img src={props.imgUrl} className="card--image" />
        <div className="card--stats">
        <h3 className="place">Place: {props.place}</h3>
        <h4 className="price">${props.price}</h4>
        <h4 className="timeToGo">Best time to go: {props.timeToGo}</h4>
        </div>
        </div>
    )
}