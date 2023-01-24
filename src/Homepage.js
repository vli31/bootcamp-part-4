import React from 'react';

import { Link } from "react-router-dom";
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Homepage = (props) => {

    if (!isLoaded(props.decks)) {
        return<div>Loading...</div>;
    }

    const deckList = Object.keys(props.decks).map((deckId, index) => {
    return (
        <div key={index}>
            <Link to={`/viewer/${deckId}`}>{ props.decks[deckId].name }</Link>
        </div>
    );
    });

    return (
        <div>
            <h3>Flashcards</h3>
            <Link to="/editor">Go to Card Editor</Link>
            <br></br>
            <h3>My Decks!</h3>
            { deckList }
        </div>
    ); 
}

const mapStateToProps = (state) => {
    return { decks: state.firebase.data.homepage };
}

export default compose(
    firebaseConnect(props => {
        console.log('props', props);
        return [{ path: "/homepage", storeAs: "homepage" }];
    }),
    connect(mapStateToProps),
)(Homepage);