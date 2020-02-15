import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteName: '',
            bookTitle: '',
            noteCreator: '',
            noteContent: '',
            notes: []
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3004/notes', {
            body: JSON.stringify(this.state),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(createdNotes => {
                return createdNotes.json()
            })
            .then(jsonedNotes => {
                // reset the form
                // add person to list
                this.setState({
                    noteName: '',
                    bookTitle: '',
                    noteCreator: '',
                    noteContent: '',
                    complete: Boolean,
                    notes: [jsonedNotes, ...this.state.notes]
                })
                console.log(jsonedNotes)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <header class="masthead d-flex">
                    <div class="container text-center my-auto">
                        <h3 class="mb-1">New Note</h3>
                        <h3 class="mb-5">
                            <em>Start Typing Away!</em>
                        </h3>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group >
                                <Form.Label>Name of Note</Form.Label>
                                <Form.Control type="text" value={this.state.noteName} onChange={this.handleChange} id='noteName' placeholder="Name of Your Note" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Book Title of Note</Form.Label>
                                <Form.Control type="text" value={this.state.bookTitle} onChange={this.handleChange} id='bookTitle' placeholder="Name of Your Book" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>User</Form.Label>
                                <Form.Control as="select" value={this.state.noteCreator} onChange={this.handleChange} id='noteCreator' >
                                    <option>John</option>
                                    <option>2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" value={this.state.noteContent} onChange={this.handleChange} id='noteContent' rows="8" placeholder="Type Away!" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div class="overlay"></div>
                </header>

                {/* View State */}
                {/* <h3>
                    noteName = {this.state.noteName} <br></br>
                    bookTitle = {this.state.bookTitle} <br></br>
                    noteCreator = {this.state.noteCreator} <br></br>
                    noteContent = {this.state.noteContent}
                </h3> */}
            </div>
        )
    }
}

export default Notes;