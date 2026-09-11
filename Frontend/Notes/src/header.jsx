import headerStyles from "./header.module.css"

function Header(){



    return(


<div className={headerStyles.Header}>
        <h4 className={headerStyles.Logo}>
        EASY NOTES

        </h4>

        <ul className = {headerStyles.HeaderList}>
        <li>Home</li>
        <li>Groups</li>
        <li>Locked Notes</li>


        </ul>
</div>
       

    )
}

export default Header;