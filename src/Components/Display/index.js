import React from 'react';
import "./display.css";

const Display = ({ text, value }) => (<div className="display">Your {text}: {value}</div>);

export default Display;
