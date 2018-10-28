import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import tamagotchiMap from "../../constants/tamagotchis.js";
import itemsMap from "../../constants/items";

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
    const { id, items } = this.props;
    const firstColumnItems = items.slice(0, items.length / 2);
    const secondColumnItems = items.slice(items.length / 2);
    return (
      <section className="columns is-mobile">
        <section className="column is-one-third" id="firstHalfItems">
          {items &&
            firstColumnItems.map((item, i) => (
              <img src={`${itemsMap[item.ID]}`} alt="item" key={i} />
            ))}
        </section>
        <section className="column is-one-third">
          <Spritesheet
            style={getMedia(this.state.windowSize)}
            image={tamagotchiMap[id].image}
            widthFrame={32}
            heightFrame={32}
            steps={tamagotchiMap[id].frames}
            fps={1}
            loop
          />
        </section>
        <section className="column is-one-third" id="secondHalfItems">
          {items &&
            secondColumnItems.map((item, i) => (
              <img src={`${itemsMap[item.ID]}`} alt="item" key={i} />
            ))}
        </section>
      </section>
    );
  }
}

export default Tamagotchi;
