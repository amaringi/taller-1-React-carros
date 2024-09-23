import React from "react";

 export default function HolaMundo(){
    
    return(
        <div style={{backgroundColor:"gray",
            height:"200px",
            marginBottom:"0",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            color:"white",
        }}>
            <img style={{width:"300px"}} src="/src/imagenes/png-clipart-classic-car-auto-show-motorcycle-television-show-classic-car-background-truck-bicycle.png" alt="" />
            <h1 style={{margin:"0"}}>SUPER AUTOS COLOMBIA</h1>
            <p style={{marginTop:"0"}}>Solo Clasicos</p>
        </div>
    )
}