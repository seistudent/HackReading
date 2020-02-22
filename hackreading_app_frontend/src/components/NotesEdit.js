import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class NotesEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            noteName: '',
            bookTitle: '',
            noteCreator: '',
            noteContent: '',
            selectedNote: '',
            notes: [],
        }
    }
    componentDidMount() {
        this.setState({
            selectedNote: this.props.location.state.selectedNote,
            noteName: this.props.location.state.selectedNote.noteName,
            bookTitle: this.props.location.state.selectedNote.bookTitle,
            noteCreator: this.props.location.state.selectedNote.noteCreator,
            noteContent: this.props.location.state.selectedNote.noteContent,
        })
        console.log("this.prop", this.props.location.state.selectedNote)
        fetch('http://localhost:3004/notes')
            .then(response => response.json())
            .then(notes => {
                console.log(notes);
                this.setState({
                    notes: notes,
                });
            });
    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3004/notes/' + this.state.selectedNote._id, {
            body: JSON.stringify(this.state),
            method: 'PUT',
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
                        <h3 class="mb-1">Edit Note</h3>
                        <h3 class="mb-5">
                            <em>Start Typing Away!</em>
                        </h3>
                        {this.state.selectedNote ?
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group >
                                    <Form.Label>Name of Note</Form.Label>
                                    <Form.Control type="text" defaultValue={this.state.selectedNote.noteName} onChange={this.handleChange} id='noteName' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Book Title of Note</Form.Label>
                                    <Form.Control type="text" defaultValue={this.state.selectedNote.bookTitle} onChange={this.handleChange} id='bookTitle' />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>User</Form.Label>
                                    <Form.Control as="select" defaultValue={this.state.selectedNote.noteCreator} onChange={this.handleChange} id='noteCreator' >
                                        <option>{this.props.currentUser.username}</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control as="textarea" defaultValue={this.state.selectedNote.noteContent} onChange={this.handleChange} id='noteContent' rows="6" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                            </Button>
                            </Form>
                            : ""
                        }
                    </div>
                    <div class="overlay"></div>
                </header>
            </div>
        )
    }
}

export default NotesEdit;