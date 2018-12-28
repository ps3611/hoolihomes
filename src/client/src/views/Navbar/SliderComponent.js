import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../styles/SliderComponent.css';

class SliderComponent extends Component {
  state = {
    value: [this.props.min, this.props.max],
  }

  handleAfterChange = value => {
    this.props.updateValues(value);
    this.props.fetchHomesList(this.props.queryParameters,false);
  }

  render() {
    const { title, min, max, step } = this.props;
    return (
      <div className='SliderComponent'>
        <div className='SliderTitle'>
          <p>{title}</p>
        </div>
        <div className='SliderRange'>
          <Range
            min={min}
            max={max}
            step={step}
            value={this.state.value}
            included={false}
            allowCross={false}
            onChange={value => this.setState({ value })}
            onAfterChange={this.handleAfterChange}
          />
        </div>
        <div>
          <p>{`${this.state.value[0]} - ${this.state.value[1]}`}</p>
        </div>
      </div>
    );
  }
}

export default SliderComponent;
