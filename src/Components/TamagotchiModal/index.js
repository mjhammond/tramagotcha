import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import tamagotchiMap from "../../constants/tamagotchis.js";
import "./modal.css";

const TamagotchiModal = ({ id, showModal }) => (
  <section className="modalmain">
    <div className={showModal ? "modal is-active " : "modal"}>
      <div className="modal-content">
        <Spritesheet
          // style={getMedia(this.state.windowSize)}
          image={tamagotchiMap[id].image}
          widthFrame={32}
          heightFrame={32}
          steps={tamagotchiMap[id].frames}
          fps={1}
          loop
        />
      </div>
    </div>
  </section>
);

export default TamagotchiModal;
