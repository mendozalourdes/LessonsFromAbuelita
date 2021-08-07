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
            image: [],
            sentence: [],
            savedSentences: [],
        };
        this.handler = this.handler.bind(this)
        console.log("state", this.state)
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

        handler(newSentence) {
            // const newSentence = this.state.sentence;

            this.setState({
              savedSentences:[...this.state.savedSentences, newSentence]
            })
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
        console.log("HomeState", this.state)
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
            render={({match}) => {
              return (
                <>
              {this.state.word && this.state.definition && this.state.image && !this.state.error && <FormView handler={this.handler} props={this.state}/>}
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

//create this one as a class component, and hold state there. then this is where all of the other components are rendered which will make it easier to pass props to everywhere else 
//then word of the day essentially just becomes word of the day 