import React from 'react';
import { Route } from 'react-router-dom';
import WordoftheDay from './WordoftheDay.css'
import apiCalls from "../../Utilities/apiCalls";
import SingleWord from '../SingleWord/SingleWord';


class WordsoftheDay extends React.Component {
    constructor() {
        super();
        this.state = {
            word: [],
            id: Date.now(),
            error: "",
            definition: []

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
                console.log(this.state)
                console.log("wordddddd", this.state.word)
                console.log("definition!!", this.state.definition)
            }
        })
        .catch((err) => this.setState({ error: err.message }));
          }

    render() {
        return (
            <main>
               {this.state.word && this.state.definition && <SingleWord word={this.state.word} definition={this.state.definition} />}
            </main>
        )

    }




}

export default WordsoftheDay;