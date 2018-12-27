import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import '../../styles/Filter.css';

class Filter extends Component {
  state = {
     isTooltipActive: false
  }

  showTooltip = () => {
     this.setState({isTooltipActive: true})
  }

  hideTooltip = () => {
     this.setState({isTooltipActive: false})
  }

  render() {
    const { id, label, popupContent } = this.props;
    return (
      <div
        id={`${id}`}
        className='Filter'
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
      >
        <h3>{ label }</h3>
        <ToolTip
          active={this.state.isTooltipActive}
          parent={`#${id}`}
          position='bottom'
          arrow='left'
        >
          { popupContent }
        </ToolTip>
      </div>
    );
  }
}

export default Filter;
