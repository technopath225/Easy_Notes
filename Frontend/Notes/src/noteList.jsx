import Note from "./note.jsx"
import listStyles from "./noteListStyles.module.css"
import { useEffect, useState } from "react";

const BASEURL = "http://localhost:5005";





function NoteList({isNoteClicked}){

    const [notesList,setNotesList] = useState([]);
    
    useEffect( () =>{


        const fetchNotes = async () => {
            try {
                const responce = await fetch(`${BASEURL}/all`);
           const data = await responce.json();
            setNotesList(data);
    
            } catch (error) {
                console.error( "Error fetching data :: ",error.message);
            }
           
        }
    
        fetchNotes();
      
    } , []);


    



    return(

        
        <div className={listStyles.listDiv}>
            <ul className={listStyles.list}>
        {
            notesList.map( (note)=>{

                return ( <li  onClick = { () =>isNoteClicked(note)} key = {note.note_id} ><Note title = {note.title} text = {note.notetext}/></li>
           )
            }


            )
        }
            
           {/*

            <li key = "6">        <Note title = "THE WORK" text = "When i get homw from work i must fiuhakshf asfajhkjasf kjhasfah jkhkh kjhfkjahfkjashfsa kjhkjhkjhsafa kjhkjhkasf kjhkhkjsaf kjhkjashfkjahf asfkjakshfakjsfha askjfhakjfhakfha asfkjhaskjashfa kjhkhkjsdhkjshfshdjfh kjhfkjshdfkjsdhf "/></li>
            */} </ul>



       
      
        </div>
        
        
        
        

    )
}

export default NoteList