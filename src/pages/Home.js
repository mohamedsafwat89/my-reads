import React from "react";
import Shelf from "../components/Shelf";
import AddButton from "../components/AddButton";

function Home(props) {
	return (
		<>
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<Shelf />;
				<AddButton />
			</div>
		</>
	);
}

export default Home;
