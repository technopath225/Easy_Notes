import Note from "./note.jsx"
import listStyles from "./noteListStyles.module.css"
import { useEffect, useState } from "react";

const BASEURL = "http://localhost:5005";





function NoteList({notesArray,isNoteClicked}){

    
console.log(notesArray);
    



    return(

        
        <div className={listStyles.listDiv}>

           
            {notesArray == null ?(
                <h4>Create new notes</h4>

            ):(

                <ul className={listStyles.list}>


                {notesArray.map( (note)=>{

                    return( <li  onClick = { () =>isNoteClicked(note)} key = {note.note_id} ><Note title = {note.title} text = {note.notetext}/></li>)})}
                </ul>

            )}

        </div>
        
        
        
        

    )
}

export default NoteList