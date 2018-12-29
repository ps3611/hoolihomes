import React, { Component } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { numberFormater } from '../helper';
import '../../styles/SliderPopup.css';


class SliderPopup extends Component {
  state = {
    value: [this.props.min, this.props.max],
  }

  handleAfterChange = value => {
    this.props.updateValues(value);
    this.props.fetchHomesList(this.props.queryParameters);
  }

  render() {
    const { title, unit, min, max, step } = this.props;
    return (
      <div className='SliderPopup'>
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
            handleStyle={[dotStyle, dotStyle]}
          />
        </div>
        <div className='SliderValues'>
          <p>{`${numberFormater(this.state.value[0],1,0,unit)} - ${numberFormater(this.state.value[1],1,0,unit)}`}</p>
        </div>
      </div>
    );
  }
}

export default SliderPopup;

const dotStyle = {
  height: 20,
  width: 20,
  marginLeft: -10,
  marginTop: -8,
  borderColor: '#008489',
  borderWidth: 'medium',
}
