import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function HandleChange(event) {
    const { name, value } = event.target;
    setnote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setnote("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={HandleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={HandleChange}
          value={note.content}
        />
        <button
          onClick={() => {
            props.addNote(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
