import React from 'react';
import { Route } from 'react-router-dom';
import "./FormView.css"; 

class FormView extends React.Component {
    constructor(props) {
        console.log("props", props)
        super();
        this.state = {
            savedWord: [],
            sentence: [],
            savedSentences: [],
            id: Date.now(),
            error: "",
        };
    }

    render() {
        return (
            <main>
               {/* {this.state.word && this.state.definition && !this.state.error && <SingleWord word={this.state.word} definition={this.state.definition} image={this.state.image} />} */}
            </main>
        )

    }



    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitSentence = event => {
        event.preventDefault();
        const newSentence = this.state.sentence
        this.setState({ savedSentences:[...this.state.savedSentences,  newSentence] })
        console.log("state", this.state)
    }

    render() {
        console.log("saaaad", this.state)

        return (

<section className="homepage-view">
<header className="app-header">
    <h1 className="app-title">Lessons from Abuelita </h1>
    <div className="links">
    <p className="saved-link">Saved Words & Sentences</p>
    <p className="origin-story-link">About Us</p>
    </div>
</header>
    <section className="form-container">
        <main className="main-form-container">
            <input
                id="sentence-input"
                type="text"
                name="sentence"
                placeholder="Write your sentence here"
                // value={this.state.name}
                onChange={event => this.handleChange(event)}
            /> 
        <button id="submitBtn" className="submit-button" onClick={event => this.submitSentence(event)}>Send to Abuelita!</button>

        </main>
        </section>
</section> 
        )
    }







}


export default FormView;