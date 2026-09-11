import searchBarStyles from "./searchBarStyles.module.css"



function SearchBar(){


    return(
        <div className={searchBarStyles.searchDiv}>

         <input className={searchBarStyles.input} type="text" placeholder=" Search Notes"/>
        <button className={searchBarStyles.button}>Search</button>
        </div>
       
        
      

    )
}

export default SearchBar