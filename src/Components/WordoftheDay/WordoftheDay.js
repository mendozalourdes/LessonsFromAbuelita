import React from 'react';
import { Route } from 'react-router-dom';
import WordoftheDay from './WordoftheDay.css'
import apiCalls from "../../Utilities/apiCalls";



class WordoftheDay extends React.Component {
    constructor() {
        super();
        this.state = {
            word: [],
            error: "",
        };
    }

    componentDidMount() {
        apiCalls.fetchAPIData("/random")
        .then((response) => {
            if (typeof response === "string") {
              this.setState({ error: response });
            } else {
              this.setState({ word: response.data.body.Word});
            }
          })
          .catch((err) => this.setState({ error: err.message }));
      }



    render() {
        return (
            <main>

            </main>
        )

    }




}

export default WordoftheDay;