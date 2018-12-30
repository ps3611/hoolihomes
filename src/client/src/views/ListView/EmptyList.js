import React, { Component } from 'react';
import '../../styles/EmptyList.css'

class EmptyList extends Component {
  render() {
    return (
      <div className='EmptyList'>
        <div className='EmptyListImage'>
          <img src={require('../../assets/NoHomes.svg')} alt='no homes'/>
        </div>
        <div className='EmptyListText'>
          <h2><i>No homes found...</i></h2>
        </div>
      </div>
    );
  }
}

export default EmptyList;
