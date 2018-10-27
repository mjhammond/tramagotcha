import React from "react";
import Spritesheet from 'react-responsive-spritesheet';
import tamagotchiMap from '../../constants/tamagotchis.js';

const style = {
    width: 150,
    height: 150,
}

const Tamagotchi = ({ id }) => (<Spritesheet style={style}
                            image={tamagotchiMap[id].image}
                            widthFrame={32}
                            heightFrame={32}
                            steps={tamagotchiMap[id].frames}
                            fps={1}
                            loop
                         />);

export default Tamagotchi;
