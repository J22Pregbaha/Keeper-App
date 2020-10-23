import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(title, content) {
		setNotes((previousNotes) => {
			return [...previousNotes, {title: title, content: content}];
		});
	}

	function deleteNote(noteIndex) {
		setNotes((previousNotes) => {
			return previousNotes.filter((note, index) => {
				return index !== noteIndex;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea submitNote={addNote} />
			{notes.map((note, index) => <Note key={index} index={index} title={note.title} content={note.content} onDelete={deleteNote} />)}
			<Footer />
		</div>
	);
}

export default App;
