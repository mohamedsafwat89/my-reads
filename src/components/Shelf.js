import React from "react";
import BookShelf from "./BookShelf";

function Shelf(props) {

	return (
		<>
			<div className="list-books-content">
				<div>
					<BookShelf title="Currently Reading" />
					<BookShelf title="Want to Read" />
					<BookShelf title="Read" />
				</div>
			</div>
		</>
	);
}

export default Shelf;
