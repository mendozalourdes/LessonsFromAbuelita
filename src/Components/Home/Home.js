import React from "react";
import "./Home.css";
import apiCalls from "../../Utilities/apiCalls";
import { Route, Switch } from "react-router-dom";
import SingleWord from "../SingleWord/SingleWord";
import FormView from "../FormView/FormView";
import HomeView from "../HomeView/HomeView";
import Error from "../Error/Error";
import FetchFail from "../FetchFail/FetchFail";
import LoadingImage from '../../assets/LoadingImage.png' 

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      word: [],
      id: Date.now(),
      error: "",
      definition: [],
      image: [],
      sentence: [],
      savedSentences: [],
      savedWords: []
    };
    this.handler = this.handler.bind(this);
    this.wordHandler = this.wordHandler.bind(this);
    this.fetchAWord = this.fetchAWord.bind(this);
  }

  componentDidMount() {
    apiCalls
      .fetchAPIData("/random")
      .then((response) => {
        if (typeof response === "string") {
          console.log("errorrrr", this.state.error)
          this.setState({ error: response });
        } else {
          console.log("daaattaaaa", response)
          this.setState({ word: response.body.Word });
          this.setState({ definition: response.body.DefinitionMD });
          this.setState({ image: response.body.urls.image });
        }
      })
      .catch((err) => this.setState({ error: err.message }));
  }

 
  fetchAWord() {
    apiCalls
      .fetchAPIData("/random")
      .then((response) => {
        if (typeof response === "string") {
          console.log("FETCHerrorrrr", this.state.error)
          this.setState({ error: response });
        } else {
          console.log("FETCHDATA", response)
          this.setState({ word: response.body.Word });
          this.setState({ definition: response.body.DefinitionMD });
          this.setState({ image: response.body.urls.image });
        }
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  handler(newSentence) {
    this.setState({
      savedSentences: [...this.state.savedSentences, newSentence],
    });
  }

  wordHandler(newWord) {
    this.setState({
      savedWords: [...this.state.savedWords, newWord],
    });
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitSentence = (event) => {
    event.preventDefault();
    const newSentence = this.state.sentence;
    this.setState({
      savedSentences: [...this.state.savedSentences, newSentence],
    });
  };

  render() {
    console.log("HomeState", this.state);
    return (
      <main className="main-container">

    {!this.state.word && !this.state.error.length && (
          <div className="loading-view">
            <h2> Loading Abuelita's Page...</h2>
            <img
              className="loading-image"
              alt={"Loading-page-image"}
              src={LoadingImage}
            ></img>
          </div>
        )}

{this.state.error.length && (<FetchFail errorMsg="Sorry, something is wrong with Abuelita's page. Please try again later." />)} 


        <section>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    {!this.state.error.length && <HomeView />}
                
                  </>
                );
              }}
            />
            <Route
              exact
              path="/form"
              render={() => {
                return (
                  <>
                    {this.state.word &&
                      this.state.definition &&
                      this.state.image &&
                      !this.state.error && (
                        <FormView wordHandler={this.wordHandler} handler={this.handler} props={this.state} />
                      )}
                  </>
                );
              }}
            />

            <Route
              exact
              path="/word"
              render={() => {
                return (
                  <>
                    {this.state.word &&
                      this.state.image &&
                      !this.state.error && (
                        <SingleWord
                          newWord={this.fetchAWord}
                          word={this.state.word}
                          definition={this.state.definition}
                          image={this.state.image}
                        />
                      )}
                  </>
                );
              }}
            />

            <Route
              render={() => {
                return (
                  <>
                    {!this.state.error.length && <Error errorMsg="That page does not exist. Go back home?"/>}
                  </>
                );
              }}
            />
          </Switch>
        </section>
      </main>
    );
  }
}

export default Home;
