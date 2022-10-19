import React from "react"
import NavBar from "./NavBar"
import data from "./data"
import Card from "./Card"
import "./style.css"

export default function App(){
      let vacationSpots = data.map(spot =>
        <Card 
        key = {spot.id}
        imgUrl = {spot.imgUrl}
        place = {spot.place}
        price = {spot.price}
        timeToGo = {spot.timeToGo}
        />
      )
  return(
    <div>
    <NavBar />
    {vacationSpots} 
    </div>
  )
}