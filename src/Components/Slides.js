import React, { useState } from 'react';
import Navigation from './Navigation';
import data from '../assets/data';

class Slides extends React.Component {
  constructor(){
    super();
    this.state = {
      index: 0,
      slidenumber: 1
    }
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }
  handleNextButtonClick (e) {
    if(this.state.index !== 24){
    let newIndex = this.state.index + 1;
    let newSlide = this.state.slidenumber + 1;
    this.setState({
      index: newIndex,
      slidenumber: newSlide
    })
    }
  }

  handleBackButtonClick (e) {
    if(this.state.index !== 0){
      let newIndex = this.state.index - 1;
      let newSlide = this.state.slidenumber -1;
      this.setState({
        index: newIndex,
        slidenumber: newSlide
      })
    }
 }

  render(){
    return (
      <div className = "class-container">
          <div className = "textdiv">
            <div className = "slidetopper">
              <h1>{data[this.state.index].name.first} {data[this.state.index].name.last}</h1>
              <p className = "pnumbers">{this.state.slidenumber}/25</p>
            </div>
            <section>
              <p><strong>From: </strong>{data[this.state.index].city}, {data[this.state.index].country}</p>
              <p><strong>Job Title: </strong>{data[this.state.index].title}</p>
              <p><strong>Favorite Movies: </strong></p>
            </section>  
            <ol>
              <li>{data[this.state.index].favoriteMovies[0]}</li>
              <li>{data[this.state.index].favoriteMovies[1]}</li>
              <li>{data[this.state.index].favoriteMovies[2]}</li>
            </ol>
          </div>
      
        <Navigation handleNextButtonClick={this.handleNextButtonClick}
        handleBackButtonClick={this.handleBackButtonClick} />

      </div>
        
    
      
    );
  }
}

export default Slides;
