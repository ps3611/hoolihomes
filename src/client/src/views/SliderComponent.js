import React, { Component } from 'react';
import '../styles/SliderComponent.css';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class SliderComponent extends Component {
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
            included={info.included}
            defaultValue={info.defaultValue}
            allowCross={info.allowCross}
            />
        </div>
      </div>
    );
  }
}

export default SliderComponent;
