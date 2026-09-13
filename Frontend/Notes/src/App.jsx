import Header from "./header.jsx"
import NoteList from "./noteList.jsx";
import appStyle from "./appStyle.module.css"
import SearchBar from "./searchBar.jsx";
import Editor from "./editor.jsx";
import "./variables.css"
import { useState, useEffect } from "react";



const BASEURL = "http://localhost:5005";

function App() {
 
  const defNote = {

    note_id : -1,
    title:"TITLE",
    notetext:"TEXT"
  
  }

  const createID = 45;
  const templateNote = {

    note_id : createID,
    title:"",
    notetext:""
  
  }

  

  const [isEditing,setIsEditing] = useState(false);
 

  const [selectedNote,setNote] = useState(defNote);

  const [notesList,setNotesList] = useState([]);
    


  const PushToDatabase = async (eNote) => {
    console.log(`Start PUSH ${eNote.note_id} - ${eNote.title}`);
  
    try {
      const res = await fetch(`${BASEURL}/edit`, {
        method:'POST',
        body:JSON.stringify(eNote),
        headers:{
          'content-type':'application/json'
        }});
  
        const resData = await res.json();
        updateNoteContent(eNote.note_id,eNote.title,eNote.notetext);
        console.log(resData);
        
  
    } catch (error) {
      console.log(error);
      console.log("failed");
  
    }
  }
  
  const  updateNoteContent = (targetId, newTitle, newNoteText) => {
    setNotesList(prevList =>
      prevList.map(note =>
        note.note_id === targetId
          ? { ...note, title: newTitle, notetext: newNoteText } 
          : note                                              
      )
    );
  
    console.log("NEW LIST IS NOW READY");
  };


  const createButton = () =>{

    console.log("creating new");
    setNote(templateNote);
    setIsEditing(true);
       
    }

  


  const searchNotes = async (sTerm)  =>{

    
    
    const search = {searchTerm:sTerm};
    console.log(`searching term ::${search}`);
      try {
        const res = await fetch(`${BASEURL}/search`, {
          method:'POST',
          body:JSON.stringify(search),
          headers:{
            'content-type':'application/json'
          }})
    
          const resData = await res.json();
          setNotesList(resData);
        } catch (error) {
            console.error( "Error fetching data :: ",error.message);
        }
       
    }
    const fetchNotes = async () => {
      try {
          const responce = await fetch(`${BASEURL}/all`);
     const data = await responce.json();
      setNotesList(data);
        
      } catch (error) {
          console.error( "Error fetching data :: ",error.message);
      }
     
  }

  useEffect( () =>{


     
  
      fetchNotes();
    
  } , []);


  const createNote = async (newNote)  =>{

    
    try {
      const res = await fetch(`${BASEURL}/create`, {
        method:'POST',
        body:JSON.stringify(newNote),
        headers:{
          'content-type':'application/json'
        }})
  
        const resData = await res.json();
        
        fetchNotes();
      } catch (error) {
          console.error( "Error Creating New NOTE :: ",error.message);
      }
     
  }


  const deleteNote = async (noteid)  =>{

    const noteID = {note_id:noteid};

    
      try {
        const res = await fetch(`${BASEURL}/delete`, {
          method:'DELETE',
          body:JSON.stringify(noteID),
          headers:{
            'content-type':'application/json'
          }})
    
          const resData = await res.json();
          
          fetchNotes();
        } catch (error) {
            console.error( "Error Deleting a note NOTE :: ",error.message);
        }
       
    }




  const onNoteSelect = (note) => {

   
    setIsEditing(true);
    //console.log(`this is the note id ${note.id} + ${note.title}`);
    setNote(note);
  }

  const onSave = (editedNote) => {

    if(editedNote.title.length > 0){
      
    setIsEditing(false);
    setNote(editedNote);
    console.log("Save EDIT");
    console.log(`saved and push text   ${editedNote.notetext}`)

    if(editedNote.note_id ==  createID){

     
      
        createNote(editedNote);
      
      
    }else{
      PushToDatabase(editedNote);
    }
  }else{
    console.log("NO TITLE");
    alert(editedNote.title.length > 0);
    
  }

  }

  const onDiscard = () =>{
    setIsEditing(false);
   // console.log("DISCARD EDIT");
  }

  const onDelete = (noteid) =>{

    deleteNote(noteid)
    setIsEditing(false);
   // console.log("DISCARD EDIT");
  }


  return (
    <>
 

 <div className = {appStyle.body}>
    

 
    <>
    <Header/>


   <SearchBar SearchFunction = {searchNotes} createNew = {createButton}/>
    {<NoteList  notesArray = {notesList }isNoteClicked = {onNoteSelect} />}
    </>
    {
       isEditing && <Editor save = {onSave} discard = {onDiscard} note = {selectedNote}
       deleteNote = {onDelete}
      />
    }
    
    
    </div>
    </>
    
  )
}

export default App  
