import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Homepage = props => {
  if (!isLoaded(props.homepage)) {
    return <div>Loading...</div>;
  }

  const decks = Object.keys(props.homepage).map(deckId => {
    return (
      <div key={deckId}>
        <Link to={`/viewer/${deckId}`}>{props.homepage[deckId].name}</Link>
      </div>
    );
  });

  return (
    <div>
      <h2>Homepage</h2>
      <Link to="/editor">Create a new flashcards deck!</Link>
      <h3>Flashcards</h3>
      {decks}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.firebase.data);
  const decks = state.firebase.data.homepage;
  return { decks: decks };
}

export default compose(
  firebaseConnect(props => {
    console.log('props', props);
    return [{ path:"/homepage", storeAs: "homepage"}];
  }),
  connect(mapStateToProps),
)(Homepage);