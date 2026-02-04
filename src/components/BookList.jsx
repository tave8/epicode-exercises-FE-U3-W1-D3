import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import BookSearch from "./BookSearch"

class BookList extends Component {
  render() {
    return (
      <Container style={{ marginTop: this.props.marginTop || 0 }}>
        <Row>
          <BookSearch />
        </Row>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">{this.searchBooks()}</Row>
      </Container>
    )
  }
}

export default BookList
