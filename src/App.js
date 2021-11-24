import React, { Component } from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends Component {
	state = {
		books: [],
		searchedBooks: [],
		isLoading: true,
	};
	fetch() {
		BooksAPI.getAll().then((books) => {
			this.setState({
				books,
				isLoading: false,
			});
		});
	}

	componentDidMount() {
		this.fetch();
	}

	search = (query) => {
		if (query.length !== 0) {
			BooksAPI.search(query)
				.then((searchedBooks) => {
					let searchResult = [];
					for (const serachedBook of searchedBooks) {
						for (const book of this.state.books) {
							if (serachedBook.id === book.id) {
								serachedBook.shelf = book.shelf;
							}
						}
						searchResult.push(serachedBook);
					}
					return searchResult;
				})
				.then((searchedBooks) => {
					this.setState((prevState) => ({ searchedBooks }));
				})
				.catch((searchedBooks) => this.setState({ searchedBooks: [] }));
		} else {
			this.setState({ searchedBooks: [] });
		}
	};

	shelfUpdate = (addedbook, shelf) => {
		BooksAPI.update(addedbook, shelf).then((response) => {
			addedbook.shelf = shelf;
		});

		let addedBooks = this.state.books.filter(
			(book) => book.id !== addedbook.id
		);
		addedBooks.push(addedbook);
		this.setState({ books: addedBooks });
		this.setState({ searchedBooks: [] });
		this.componentDidMount();
	};
	render() {
		return (
			<div className="app">
				<Switch>
					<Route
						exact
						path={"/"}
						render={() => (
							<Home books={this.state.books} shelfUpdate={this.shelfUpdate} />
						)}
					/>
					<Route exact path={"/search"} render={()=> <Search searchedBooks={this.state.searchedBooks}
            search={this.search}
            shelfUpdate={this.shelfUpdate}/>} />
				</Switch>
			</div>
		);
	}
}

export default BooksApp;
