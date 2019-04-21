import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
<<<<<<< HEAD
    this.props.addRestaurant(this.state);
=======
    this.props.addRestaurant(); 
>>>>>>> d816c69a2e5ab3bdfb3ef7a8a172641626d0968e
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

<<<<<<< HEAD
const mapStateToProps = state => {
  return {restaurants: state.restaurants}
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (state) => dispatch(addRestaurant(state))
  }
};
=======
mapStateToProps = state => {
  return {restaurants: state.restaurants}
};
mapDispatchToProps = dispatch => {
  return {
    addRestaurant: () => {
      dispatch(addRestaurant())
    }
    
  }
}
>>>>>>> d816c69a2e5ab3bdfb3ef7a8a172641626d0968e

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantInput)
