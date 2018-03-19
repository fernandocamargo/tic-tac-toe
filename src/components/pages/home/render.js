import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from 'routes';

import './styles.css';

export default ({
  settings: { size: { current, min, max } },
  submit,
  changeSize,
  users,
  boards,
}) => (
  <section className="page home">
    <form onSubmit={submit}>
      <fieldset>
        <legend className="title">Create a new board</legend>
        <div className="field cells">
          <label htmlFor="cells">Number of cells</label>
          <input
            type="number"
            id="cells"
            value={current}
            onChange={changeSize}
            min={min}
            max={max}
            pattern="\d+"
          />
          <span>x</span>
          <strong>{current}</strong>
        </div>
        <div className="control submit">
          <button type="submit" value="Let's play!" />
        </div>
      </fieldset>
    </form>
    <nav>
      <h3>Options:</h3>
      <ul>
        <li>
          <span>Or join </span>
          <Link title="an existing one" to={routes.boards()}>
            an existing one
          </Link>
        </li>
        <li>
          <Link title="Scoreboard" to={routes.scoreboard()}>
            Scoreboard
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);
