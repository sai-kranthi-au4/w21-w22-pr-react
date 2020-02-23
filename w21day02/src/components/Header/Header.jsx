import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Header extends React.Component {
  state = {
    searchTerm: ""
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    console.log("click");
  };
  render() {
    return (
      <Navbar bg="primary" variant="dark" className="mb-1">
        <Navbar.Brand href="#home">YT Player</Navbar.Brand>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
        <Form className="ml-5" style={{ flex: "auto", width: "80%" }} inline>
          <FormControl
            style={{ width: "inherit" }}
            type="text"
            onChange={this.handleChange}
            placeholder="Search Your Video"
            className="mr-sm-2"
          />
          <Button
            variant="outline-light"
            type="submit"
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}
export default Header;
