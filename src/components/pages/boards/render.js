import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from 'routes';
import For from 'components/helpers/for';
import Board from 'components/board';

import './styles.css';

export default ({ boards }) => (
  <section className="page boards">
    <h2 className="title">Boards</h2>
    <article className="list">
      <ul>
        <For each={boards}>
          <Board />
        </For>
      </ul>
    </article>
    <nav>
      <h3>Options:</h3>
      <ul>
        <li>
          <Link title="Create a new board" to={routes.home()}>
            Create a new board
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);
