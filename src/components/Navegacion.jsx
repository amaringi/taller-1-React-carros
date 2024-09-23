import React from "react";

export default function Navegacion(){
    return(
        <nav>
            <ul  style={{listStyle:"none",
                 marginLeft:"0",
                 padding:"0",
                 display:"flex",
                 justifyContent:"space-around",
                 alignItems:"center",
                 marginTop:"0",
                 backgroundColor:"silver",
                 width:"100%",
                 height:"70px"}}>

                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}