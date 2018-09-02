import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  state = {
    text: this.props.text,
  };

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = `${text}...`;
    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text }))
        : this.setState(prevState => ({ text: `${prevState.text}.` }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p className="loader">{this.state.text}</p>;
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
}

Loading.defaultProps = {
  text: 'Загрузка',
  speed: 300,
};

export default Loading;
