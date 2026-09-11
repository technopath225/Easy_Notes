import noteStyles from "./note.module.css"

function NOTE(props){


    return(
            <div className={noteStyles.slide}>
                <div className={noteStyles.deco}></div>
                
                <h4 className = {noteStyles.title}>{props.title}</h4>
                <div className={noteStyles.textDiv}>
                <p className = {noteStyles.text}>{props.text}</p>
                </div>
              
            </div>
    )

}


export default NOTE;
   