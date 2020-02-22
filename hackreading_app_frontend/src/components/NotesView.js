import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotesView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteName: '',
            bookTitle: '',
            noteCreator: '',
            noteContent: '',
            noteSummary: '',
            notes: '',
            selectedNote: "",
        }
        // deleteNote = (id, index) => {
        //     console.log(id, index)
        // }
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
            .then(response => {
                return response.json()
            })
            .then(notes => {
                this.setState({
                    notes: notes
                });
                console.log(notes);
            });
        console.log("props", this.state.notes)
        // this.setState({ notes: this.props.notes })
    }
    componentDidUpdate() {
        fetch("/users")
            .then(response => response.json())
            .then(users => {
                this.setState({
                    users: users
                });
            });
        fetch('http://localhost:3004/notes')
            .then(response => {
                return response.json()
            })
            .then(notes => {
                this.setState({
                    notes: notes
                });
                console.log(notes);
            });
        console.log("props", this.state.notes)
        // this.setState({ notes: this.props.notes })
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
    setNote = (notes) => {
        console.log("notes", notes)
        this.setState({
            selectedNote: notes
        })
    }
    // deleteNote = (id, index) => {
    //     fetch('notes/' + id,
    //       {
    //         method: 'DELETE'
    //       })
    //       .then(data => {
    //         this.setState({
    //           notes: [
    //             ...this.state.notes.slice(0, index),
    //             ...this.state.notes.slice(index + 1)
    //           ]
    //         })
    //       })
    // }
    render() {
        return (
            <div>

                <header class="masthead d-flex" id="NotesView" style={{ height: '100%' }}>
                    <div class="container text-center my-auto text-center d-lg-block">
                        <br></br>
                        <h3 class="mb-1">Dashboard</h3>
                        <h3 class="mb-5">
                            <em>Your Notes Repository!</em>
                        </h3>
                        <br></br>
                        {this.state.notes ? this.state.notes.map(notes => {
                            return (
                                <React.Fragment>
                                    <table class="table table-dark table-hover table-striped text-white">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name of Note</th>
                                                <th scope="col">Book Title</th>
                                                <th scope="col">User</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> {notes.noteName} </td>
                                                <td> {notes.bookTitle} </td>
                                                <td> {notes.noteCreator} </td>
                                                <td>
                                                    <Link to={{
                                                        pathname: "/notesEdit",
                                                        state: {
                                                            selectedNote: notes
                                                        }
                                                    }}>
                                                        Edit Note
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-dark table-hover table-striped text-white">
                                        <thead>
                                            <tr>
                                                <th scope="col">Summary of Note</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td id={notes._id}> {notes.noteSummary} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br></br>
                                </React.Fragment>
                            )
                        }) : ""}
                    </div>
                </header>
            </div >
        )
    }
}

export default NotesView;