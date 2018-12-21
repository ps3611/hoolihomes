import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';

export default class SliderSelector extends Component {
  render () {
    const { title, min, max, marks, step, included, defaultValue, allowCross, onChange} = this.props;
    return (
      <article className="message is-link">
        <div className="message-header">
          <h4><strong>{title}</strong></h4>
        </div>
        <div className="message-body">
          <div className="slider">
            <Range
              min={min}
              max={max}
              marks={marks}
              step={step}
              included={included}
              defaultValue={defaultValue}
              allowCross={allowCross}
              onChange={onChange}
            />
          </div>
        </div>
      </article>
    )
  }
};
