import Header from "./header.jsx"
import NoteList from "./noteList.jsx";
import appStyle from "./appStyle.module.css"
import SearchBar from "./searchBar.jsx";
import Editor from "./editor.jsx";
import "./variables.css"
import { useState } from "react";



function App() {
 
  const defNote = {
    id : -1,
    title:"loading",
    text:"Looking for something going wrong"
  
  }
  

  const [isEditing,setIsEditing] = useState(false);
  const [selectedNote,setNote] = useState(defNote);

  const onNoteSelect = (note) => {

   
    setIsEditing(true);
    console.log(`this is the note id ${note.id} + ${note.title}`);
    setNote(note);
  }

  const onSave = () => {
    setIsEditing(false);

    console.log("Save EDIT");


  }

  const onDiscard = () =>{
    setIsEditing(false);
    console.log("DISCARD EDIT");
  }


  return (
    <>
 

 <div className = {appStyle.body}>
    

 
    <>
    <Header/>


   <SearchBar/>
    <NoteList isNoteClicked = {onNoteSelect}/>
    </>
    {
       isEditing && <Editor save = {onSave} discard = {onDiscard} note = {selectedNote}

      />
    }
    
    
    </div>
    </>
    
  )
}

export default App  
