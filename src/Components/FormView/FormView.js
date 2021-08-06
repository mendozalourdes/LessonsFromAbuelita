import React from 'react';
import { Route } from 'react-router-dom';


class FormView extends React.Component {
    constructor() {
        super();
        this.state = {
            savedWord: [],
            savedSentence: [],
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




}

export default FormView;