import headerStyles from "./header.module.css"

function Header(){



    return(


<div className={headerStyles.Header}>
        <h4 className={headerStyles.Logo}>
        EASY NOTES

        </h4>

        <ul className = {headerStyles.HeaderList}>
        <li>HOME</li>
        <li>GROUPS</li>
        <li>LOCKED</li>


        </ul>
</div>
       

    )
}

export default Header;