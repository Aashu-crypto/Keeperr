import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function NewNote(notee) {
  return <Note key={notee.key} title={notee.title} content={notee.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(NewNote)}

      <Footer />
    </div>
  );
}

export default App;
