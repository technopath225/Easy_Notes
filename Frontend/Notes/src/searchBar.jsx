import { useState } from "react"
import searchBarStyles from "./searchBarStyles.module.css"



function SearchBar({SearchFunction,createNew}){

    const [searchTerm,setSearchTerm] = useState("");

    return(
        <div className={searchBarStyles.searchDiv}>

         <input className={searchBarStyles.input} type="text" placeholder=" Search Notes" onChange={(eve) => {setSearchTerm(eve.target.value); if(eve.target.value.length == 0){

         SearchFunction("")}}}/>
        <button className={searchBarStyles.searchButton} onClick={() => {SearchFunction(searchTerm)}}>Search</button>
       
        <button className={searchBarStyles.newButton} onClick={() => {createNew()}}>    NEW</button>
        </div>
       
        
      

    )
}

export default SearchBar