import React from "react";
// import star from '../images/star.png'
export default function Card(props){
    console.log(props.openspot)
    let badgetext
    if(props.item.openspot===0)
    {
        badgetext="SOLD OUT"
    }else if(props.item.country==="online")
    {
        badgetext="ONLINE"
    }
    return(
        <div className="card">
            {badgetext &&<div className="card-badge">{badgetext}</div>}
            <img src={props.item.coverimg} className="card-img"></img>
            <div>
                <img src='/images/star.png' className="card-star"></img>
                <span>{props.item.rating}</span>
                <span className="grey">({props.item.reviewcount}) </span>
                <span className="grey">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p> <span className="bold">from ${props.item.price}</span> / person</p>
        </div>
    )
}