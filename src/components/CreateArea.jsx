import React, {useState} from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [focussed, setFocussed] = useState(false);

	return (
		<div>
			<form className="create-note" onSubmit={(event) => {
				event.preventDefault();
			}}>
				{focussed && <input name="title" onChange={(event) => setTitle(event.target.value)} placeholder="Title" value={title} autoComplete="off" />}
				<textarea 
					name="content"
					onChange={(event) => setContent(event.target.value)}
					onFocus={() => setFocussed(true)}
					placeholder="Take a note..."
					rows={focussed ? 3 : 1}
					value={content}
				/>
				<Zoom in={focussed ? true : false}>
					<Fab onClick={() => {
						props.submitNote(title, content);
						setTitle("");
						setContent("");
					}}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
