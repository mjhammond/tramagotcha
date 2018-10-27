import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import tamagotchiMap from "../../constants/tamagotchis.js";

const media = {
  mob: {
    width: 75,
    height: 75
  },
  tablet: {
    width: 100,
    height: 100
  },
  desktop: {
    width: 150,
    height: 150
  }
};

const getMedia = windowSize => {
  return windowSize < 768
    ? media.mob
    : windowSize < 1024
      ? media.tablet
      : media.desktop;
};

class Tamagotchi extends React.Component {
  state = {
    windowSize: 0,
    resizeListener: null
  };

  constructor() {
    super();
    this.resizeListener = this.resizer.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeListener);

    this.setState({
      windowSize: window.innerWidth
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener);
  }

  resizer = () => this.setState({ windowSize: window.innerWidth });

  render() {
    const { id } = this.props;
    return (
      <Spritesheet
        style={getMedia(this.state.windowSize)}
        image={tamagotchiMap[id].image}
        widthFrame={32}
        heightFrame={32}
        steps={tamagotchiMap[id].frames}
        fps={1}
        loop
      />
    );
  }
}

export default Tamagotchi;
