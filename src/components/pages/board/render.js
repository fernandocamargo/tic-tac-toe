import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from 'routes';
import For from 'components/helpers/for';
import Slot from 'components/slot';

import './styles.css';

export default ({ board: { slots = [] } }) => (
  <section className="page board">
    <form>
      <fieldset>
        <legend className="title">Vs.</legend>
        <div className="slots">
          <For each={slots}>
            <Slot />
          </For>
        </div>
      </fieldset>
    </form>
    <nav>
      <h3>Options:</h3>
      <ul>
        <li>
          <Link title="Quit" to={routes.home()}>
            Quit
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);
