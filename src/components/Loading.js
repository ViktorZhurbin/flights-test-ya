import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  state = {
    text: this.props.newText,
  };

  componentDidMount() {
    const { newText, speed } = this.props;
    const { text } = this.state;
    const stopper = `${newText}...`;
    this.interval = window.setInterval(() => {
      text === stopper
        ? this.setState(() => ({ text: newText }))
        : this.setState(prevState => ({ text: `${prevState.text}.` }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { text } = this.state;
    return <p className="loader">{text}</p>;
  }
}

Loading.propTypes = {
  newText: PropTypes.string,
  speed: PropTypes.number,
};

Loading.defaultProps = {
  newText: 'Loading',
  speed: 300,
};

export default Loading;
