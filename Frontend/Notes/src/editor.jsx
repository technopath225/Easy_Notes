import editorStyles from "./editorStyles.module.css"
import { useState } from "react";


function Editor({save ,discard,deleteNote, note}){

   /* console.log(`text from EDITO-- ID : ${note.note_id} -- TITLE : ${note.title} -- TEXT : ${note.notetext} `);
    console.log(note);*/

    const [localText,setLocalText] = useState(note.notetext);
    const [localTitle,setLocalTitle] = useState(note.title);
    
    const saveNote = () => {
        const editedNote = {
            note_id:note.note_id,
            title : localTitle,
            notetext : localText }

        save(editedNote);
    }

    console.log("editor reacted");
    return(

        
        <div className={editorStyles.popDiv}>

            <div className={editorStyles.popWindow}>
           
            <ul className={editorStyles.topButtonsList}>
            <input type = "text" value = {localTitle} onChange={(e) => setLocalTitle(e.target.value)} required minLength={4}></input>
            <li><button>SIZE</button></li>
            <li><button>BOLD</button></li>
            <li><button>ALIGN</button></li>
            </ul>
            <textarea className={editorStyles.textArea} value = {localText}  onChange={(e) => {setLocalText(e.target.value); 
            ; console.log(e.target.value)}  }  required minLength={4}>

        
</textarea>
            
            <div>

            <ul className={editorStyles.bottomButtonsList}>
            <li><button className={editorStyles.deleteBtn} onClick={()=>deleteNote(note.note_id)}>Delete</button></li>
            <li><button onClick={discard}>Discard</button></li>
            <li><button onClick={saveNote}>Save</button></li>
            
            
            </ul>

            </div>
            </div>
           
            
           

        
        </div>


    )
}

export default Editor;
