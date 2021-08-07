import React from 'react';
import './Home.css';
import apiCalls from "../../Utilities/apiCalls";
import { Route, Switch, Redirect } from "react-router-dom";
import SingleWord from '../SingleWord/SingleWord';
import WordsoftheDay from '../WordsoftheDay/WordoftheDay';
import FormView from '../FormView/FormView';
import HomeView from '../HomeView/HomeView';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            word: [],
            id: Date.now(),
            error: "",
            definition: [],
            image: []

        };
    }

    componentDidMount() {
        apiCalls.fetchAPIData("/random")
        .then((response) => {
            if (typeof response === "string") {
              this.setState({ error: response });
            } else {
                this.setState({ word: response.body.Word})
                this.setState({ definition: response.body.DefinitionMD})
                this.setState({ image: response.body.urls.image})
            }
        })
        .catch((err) => this.setState({ error: err.message }));
          }

    render() {
        return (
            // <section className="homepage-view">
            // <header className="app-header">
            //     <h1 className="app-title">Lessons from Abuelita </h1>
            //     <div className="links">
            //     <p className="saved-link">Saved Words & Sentences</p>
            //     <p className="origin-story-link">About Us</p>
            //     </div>
            // </header>
            <main className="main-container">
                <section>
                
            <Switch> 
                <Route
            exact
            path="/"
            render={() => {
                return (
                    <>
              <HomeView/>
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
              <FormView/>
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
               {this.state.word && this.state.definition && this.state.image && !this.state.error && <SingleWord word={this.state.word} definition={this.state.definition} image={this.state.image} />}
                </>
              );
            }}
          />

                <Redirect to="/" />
                </Switch>
                </section>
            </main>
        // </section>
 
        )

    }




}

export default Home;

 