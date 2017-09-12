import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className='product'>
        <h1>{ this.props.name }</h1>
        <h3>{ this.props.producer }</h3>
        <h3>{ this.props.hasWatermark ? 'Has Watermark' : 'No Watermark' }</h3>
        <h3>{ this.props.color}</h3>
        <h3>{ this.props.weight}</h3>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]

    if(weight === undefined) {
      return new Error('The weight prop is required.')
    }

    if(isNaN(weight)) {
      return new Error('The weight prop is not a number.')
    }

    if( weight < 80 || weight > 300) {
      return new Error('The weight prop is not in range.');
    }
  }
};
