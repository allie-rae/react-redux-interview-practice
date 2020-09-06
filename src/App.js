import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPokeList } from './actions';


function App(props) {

  useEffect(() => {
    props.getPokeList()
  }, [])

  console.log("props", props)

  return (
    <div className="App">
    </div>
  );
}

const mapStateToProps = state => {
  return {
    genericPokeList: state.genericPokeList,
    userPokeList: state.userPokeList,
    isFetching: state.isFetching,
    error: state.error,
    next: state.next,
    previous: state.previous
  }
}

export default connect(mapStateToProps, { getPokeList })(App);
