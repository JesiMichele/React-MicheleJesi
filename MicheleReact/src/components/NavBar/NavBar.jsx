import React from "react";
import"./NavBar.css"
import CardWidget from "../CartWidget/CardWidget";
const NavBar = ()=>{
return(
<>
 <h1>logo</h1>
 <ul>
    <li>
        <a href="Inicio"></a>
    </li>
    <li><a href="Meditaciones"></a></li>
    <li>
        <a href="Afirmaciones"></a>
    </li>
    <li>
        <a href="Membresia"></a>
    </li>
    <li>
        <a href="Mas Info"></a>
    </li>
 </ul>

 <CardWidget/>


</>
)
}
export default NavBar