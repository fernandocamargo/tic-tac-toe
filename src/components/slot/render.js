import React from 'react';

import './styles.css';

export default ({ coordinates }) => (
  <div className="column">
    <label>
      <input type="radio" name={coordinates} />
      <span>LOL</span>
    </label>
    <label>
      <input type="radio" name={coordinates} />
      <span>LOL</span>
    </label>
    <label>
      <input type="radio" name={coordinates} />
      <span>LOL</span>
    </label>
  </div>
);
