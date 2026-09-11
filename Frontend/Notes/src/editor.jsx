import editorStyles from "./editorStyles.module.css"



function Editor({save ,discard , note}){


    return(

        
        <div className={editorStyles.popDiv}>

            <div className={editorStyles.popWindow}>
           
            <ul className={editorStyles.topButtonsList}>
            <input type = "text" value = {note.title} onChange={(e) => setName(e.target.value)}></input>
            <li><button>SIZE</button></li>
            <li><button>BOLD</button></li>
            <li><button>ALIGN</button></li>
            </ul>
            <textarea className={editorStyles.textArea} value = {note.text} onChange={(e) => setName(e.target.value)} >

        
</textarea>
            
            <div>

            <ul className={editorStyles.bottomButtonsList}>
            <li><button onClick={discard}>Discard</button></li>
            <li><button onClick={save}>Save</button></li>
            
            </ul>

            </div>
            </div>
           
            
           

        
        </div>


    )
}

export default Editor;
