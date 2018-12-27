import React, { Component } from 'react';
import '../styles/SliderComponent.css';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class SliderComponent extends Component {

  state = {
    value: this.props.values,
  }

  handleAfterChange = value => {
    this.props.updateValues(value);
  }

  render() {
    const { title, info } = this.props;
    return (
      <div className='SliderComponent'>
        <div className='SliderTitle'>
          <p>{title}</p>
        </div>
        <div className='SliderRange'>
          <Range
            min={info.min}
            max={info.max}
            step={info.step}
            marks={info.marks}
            value={this.state.value}
            included={false}
            allowCross={false}
            onChange={value => this.setState({ value })}
            onAfterChange={this.handleAfterChange}
          />
        </div>
        <div className='SliderApply'>
          <h4>Apply</h4>
        </div>
      </div>
    );
  }
}

export default SliderComponent;
