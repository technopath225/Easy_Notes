import headerStyles from "./header.module.css"

function Header({SignOutFunc}){

    console.log("Header REACHED");

    return(


<div className={headerStyles.Header}>
        <h4 className={headerStyles.Logo}>
        EASY NOTES

        </h4>

        <ul className = {headerStyles.HeaderList}>
        <li>HOME</li>
        <li>GROUPS</li>
        <li>LOCKED</li>
        <li onClick={() => {SignOutFunc()}}>Sign Out</li>

        </ul>
</div>
       

    )
}

export default Header;