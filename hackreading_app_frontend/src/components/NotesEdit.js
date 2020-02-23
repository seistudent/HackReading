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
            noteSummary: '',
            noteEntities: '',
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
            noteSummary: this.props.location.state.selectedNote.noteSummary,
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
    entitiesAPI = () => {
        fetch('http://localhost:3004/api/entities/' + this.state.noteContent)
            .then(response => response.json())
            .then(noteEntities => {
                console.log("results of entities api", noteEntities);
                this.setState({
                    noteEntities: noteEntities,
                })
            });
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
            .then(() => {
                window.location.href = "/notes";
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <header class="masthead d-flex" style={{ height: '100%' }}>
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
                                        <option>{this.state.currentUser}</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control as="textarea" defaultValue={this.state.selectedNote.noteContent} onChange={this.handleChange} id='noteContent' rows="6" />
                                </Form.Group>



                                <Button onClick={this.summarizeAPI}>Summarize</Button>
                                <Button onClick={this.entitiesAPI}>Entity Extraction</Button>

                                <br></br><br></br>
                                {this.state.noteEntities ?

                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="row">Type</th>
                                                <th>Entity</th>
                                            </tr>
                                        </thead>
                                        <tr class="label-1">
                                            <th scope="row"> Keyword </th>
                                            <td class="align-left"> {this.state.noteEntities.entities.keyword.map(entity => <span class="label">  {entity}  </span>)} </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"> Organisation </th>
                                            <td class="align-left"> {this.state.noteEntities.entities.organization.map(entity => <span class="label">  {entity}  </span>)} </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"> Person </th>
                                            <td class="align-left"> {this.state.noteEntities.entities.person.map(entity => <span class="label">  {entity}  </span>)} </td>
                                        </tr>
                                    </table> : ""}
                                <br></br>
                                <Form.Group>
                                    <Form.Label>Summary</Form.Label>
                                    <Form.Control as="textarea" value={this.state.noteSummary} onChange={this.handleChange} id='noteSummary' rows="6" placeholder="Obtain your summary here!" />
                                </Form.Group>
                                <br></br>

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