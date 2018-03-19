import React from 'react';

export default ({ name, avatar, scoreboard: { win, draw, loss } }) => (
  <div className="profile">
    <figure>
      <img src={avatar} alt={name} title={name} />
      <figcaption>{name}</figcaption>
    </figure>
    <blockquote>
      <dl className="win">
        <dt>Win</dt>
        <dd>{win}</dd>
      </dl>
      <dl className="draw">
        <dt>Draw</dt>
        <dd>{draw}</dd>
      </dl>
      <dl className="loss">
        <dt>Loss</dt>
        <dd>{loss}</dd>
      </dl>
    </blockquote>
  </div>
);
