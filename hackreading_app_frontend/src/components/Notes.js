import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NotesView from './NotesView.js';

class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteName: '',
            bookTitle: '',
            noteCreator: '',
            noteContent: '',
            noteSummary: '',
            currentUser: this.props.currentUser,
            notes: []
        }
    }
    componentDidMount() {
        fetch("/users")
            .then(response => response.json())
            .then(users => {
                this.setState({
                    users: users
                });
            });
        fetch('http://localhost:3004/notes')
            .then(response => response.json())
            .then(notes => {
                console.log("Notes in note component", notes);
                this.setState({
                    notes: notes
                });
            });
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
                console.log('creatednote is', createdNotes)
                return createdNotes.json();
            })
            .then(jsonedNotes => {
                // reset the form
                // add person to list
                this.setState({
                    noteName: '',
                    bookTitle: '',
                    noteCreator: '',
                    noteContent: '',
                    noteSummary: '',
                    complete: Boolean,
                    notes: [jsonedNotes, ...this.state.notes]
                })
                console.log(jsonedNotes);
            })
            .catch(error => console.log(error))
    }
    summarizeAPI = () => {
        fetch('http://localhost:3004/api/summarize/' + this.state.noteName + '/' + this.state.noteContent)
            .then(response => response.json())
            .then(noteSummary => {
                console.log("results of summarize api", noteSummary);
                this.setState({
                    noteSummary: noteSummary.sentences,
                })
            });
    }
    render() {
        console.log("current user", this.state.currentUser)
        return (
            <div>

                <header class="masthead d-flex">
                    <div class="container text-center my-auto text-center d-lg-block">

                        <br></br>
                        <h3 class="mb-1">Dashboard</h3>
                        <h3 class="mb-5">
                            <em>Your Notes Repository!</em>
                        </h3>
                        <br></br>
                        <table class="table table-dark table-hover table-striped text-white">
                            <thead>
                                <tr>
                                    <th scope="col">Name of Note</th>
                                    <th scope="col">Book Title</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Action</th>
                                    {/* <th scope="col">Contents of Note</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.notes ?
                                    this.state.notes.map(notes => {
                                        return (
                                            <tr>
                                                <td> {notes.noteName} </td>
                                                <td> {notes.bookTitle} </td>
                                                <td> {notes.noteCreator} </td>
                                                <td><a href="#NotesView">See Summaries</a></td>
                                            </tr>)
                                    }) : ""}
                            </tbody>
                        </table>
                        <br></br>
                    </div>
                </header>



                <header class="masthead d-flex" style={{ height: '100%' }}>
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
                                    <option>{this.state.currentUser}</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" value={this.state.noteContent} onChange={this.handleChange} id='noteContent' rows="6" placeholder="Type Away!" />
                            </Form.Group>

                            <Button onClick={this.summarizeAPI}>Summarize</Button>

                            <Form.Group>
                                <Form.Label>Summary</Form.Label>
                                <Form.Control as="textarea" value={this.state.noteSummary} onChange={this.handleChange} id='noteSummary' rows="6" placeholder="Obtain your summary here!" />
                            </Form.Group>
                            <br></br>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div class="overlay"></div>
                </header>

                {this.state.notes ? <NotesView notes={this.state.notes} /> : ""}

            </div>
        )
    }
}

export default Notes;