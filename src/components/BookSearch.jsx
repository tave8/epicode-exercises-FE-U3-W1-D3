import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"

class BookSearch extends Component {
  state = {
    userSearch: "",
  }

  searchBooks() {
    const userSearch = this.state.userSearch.toLowerCase()
    // the books that the match the search pattern
    const filteredBooks = this.props.books.filter((book) => {
      const bookTitle = book.title.toLowerCase()
      const isBookSearched = bookTitle.includes(userSearch)
      return isBookSearched
    })

    return filteredBooks.map((book) => {
      return (
        <Col key={book.asin} className="d-flex justify-content-center">
          <SingleBook book={book} />
        </Col>
      )
    })
  }

  updateUserSearch(event) {
    this.setState({
      userSearch: event.target.value,
    })
  }

  render() {
    return (
      <Col>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="search" value={this.state.userSearch} onChange={this.updateUserSearch} placeholder="Search here..." />
          </Form.Group>
        </Form>
      </Col>
    )
  }
}

export default BookSearch
