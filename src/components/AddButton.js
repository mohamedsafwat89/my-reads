import React from "react";
import { Link } from "react-router-dom";

function AddButton(props) {
	return (
		<div className="open-search">
			<Link to="/search">
				<button>Add a book</button>
			</Link>
		</div>
	);
}

export default AddButton;
