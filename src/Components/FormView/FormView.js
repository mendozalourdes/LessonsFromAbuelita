import React from "react";
import { Route } from "react-router-dom";
import "./FormView.css";
import WordsoftheDay from "../WordsoftheDay/WordoftheDay";
import { NavLink } from "react-router-dom";
import SavedWordsSentences from "../SavedWordsSentences/SavedWordsSentences";
import SavedSentences from "../SavedSentences/SavedSentences";
import SavedWords from "../SavedWords/SavedWords";

class FormView extends React.Component {
  constructor({ props }) {
    super({ props });
    this.state = {
      word: props.word,
      sentence: props.sentence,
      savedSentences: props.savedSentences,
      definition: props.definition,
      id: props.id,
      error: "",
      image: props.image,
      savedWords: props.savedWords,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitSentence = (event) => {
    event.preventDefault();
    const newSentence = this.state.sentence;
    if(!this.state.savedSentences.includes(newSentence)) {
      this.setState({
        savedSentences: [...this.state.savedSentences, newSentence],
      });
    } else {
      return null
    }
    {
      this.props.handler(newSentence);
    }
  };

  saveThisWord = (event) => {
    event.preventDefault();
    const newWord = this.state.word;
    if (!this.state.savedWords.includes(newWord)) {
      this.setState({
        savedWords: [...this.state.savedWords, newWord],
      });
    } else {
      return null;
    }
    {
      this.props.wordHandler(newWord);
    }
  };

  render() {
    return (
      <section className="homepage-view">
        <header className="app-header">
          <NavLink to={"/"}>
            <button className="title-button">
              <h1 className="app-title">Lessons from Abuelita </h1>
            </button>
          </NavLink>
          <div className="links">
            <NavLink to={"/form"}>
              <button className="saved-button">
                <p className="saved-link">Saved Words & Sentences</p>
              </button>
            </NavLink>
            <NavLink to={"/word"}>
              <button className="word-button">
                <p className="word-link">Show Me A Word</p>
              </button>
            </NavLink>
            <p className="origin-story-link">About Us</p>
          </div>
        </header>
        <section>
          <h1>{this.state.word}</h1>
          <p>{this.state.definition}</p>
          <button
            className="save-word-btn"
            onClick={(event) => this.saveThisWord(event)}
          >
            Save This Word
          </button>
        </section>
        <section className="form-container">
          <section className="both-sections">
            <main className="main-form-container">
              <h2 className="instructions">
                Write your practice sentence here, and send it over to your
                Abuelita by clicking on the button!
              </h2>
              <textarea
                id="sentenceInput"
                className="sentence-input"
                type="text"
                name="sentence"
                placeholder="Write your sentence here"
                value={this.state.sentence}
                onChange={(event) => this.handleChange(event)}
              />
              <button
                id="submitBtn"
                className="submit-button"
                onClick={(event) => this.submitSentence(event)}
              >
                Send to Abuelita!
              </button>
            </main>
          </section>
          <section className="sentence-board-container">
            <div className="sentence-board">
              <div className="board-border">
                <div>
                  <h1 className="saved-section-heading">
                    Saved Words & Sentences
                  </h1>
                  <h3 className="words-and-sentences">
                    {this.state.savedWords && this.state.savedSentences && (
                      <SavedWordsSentences props={this.state} />
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default FormView;
