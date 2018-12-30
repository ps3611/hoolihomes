import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import '../../styles/Filter.css';

class Filter extends Component {
  state = {
     isTooltipActive: false,
  }

  showTooltip = () => {
     this.setState({isTooltipActive: true})
  }

  hideTooltip = () => {
     this.setState({isTooltipActive: false})
  }

  render() {
    const { id, label, isActive, popupContent } = this.props;
    const className = isActive ? 'Filter FilterActive' : 'Filter FilterInactive';
    return (
      <div
        id={`${id}`}
        className={className}
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
      >
        <h4>{ label }</h4>
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
