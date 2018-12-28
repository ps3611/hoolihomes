import React, { Component } from 'react';
import '../../styles/EmptyList.css'

class EmptyList extends Component {
  render() {
    return (
      <div className='EmptyList'>
        No Homes match these filters :(
      </div>
    );
  }
}

export default EmptyList;
