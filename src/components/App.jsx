import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// dl -> dictionary list
// dt -> dictionart term
// dd -> dictionart detail

function createEmoji(myEmoji){
  return (<Entry 
    key={myEmoji.id}
    id={myEmoji.id}
    emoji={myEmoji.emoji}
    name={myEmoji.name}
    meaning={myEmoji.meaning}
    />);

}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmoji)}        
      </dl>
    </div>
  );
}

export default App;
