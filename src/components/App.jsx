import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItem, setNoteItem] = useState([]);

  function onAdd(note) {
    setNoteItem((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNoteItem((prevNotes) => {
      return prevNotes.filter((everyItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={onAdd} />
      {noteItem.map((everyItem, index) => (
        <Note
          key={index}
          id={index}
          deletenote={deleteNote}
          title={everyItem.title}
          content={everyItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
