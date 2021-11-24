import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";

function Search(props) {
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/">
					<button className="close-search">Close</button>
				</Link>

				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title or author" />
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{props.searchedBooks.length > 0 ? (
						props.searchedBooks.map((book) => (
							<li key={book.id}>
								<Book book={book} shelfUpdate={this.props.shelfUpdate} />
							</li>
						))
					) : (
						<li />
					)}
				</ol>
			</div>
		</div>
	);
}

export default Search;
