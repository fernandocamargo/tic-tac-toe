import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from 'routes';
import Profile from 'components/profile';

import './styles.css';

export default ({ profile }) => (
  <section className="page scoreboard">
    <h2 className="title">Your scoreboard</h2>
    <Profile {...profile} />
    <nav>
      <h3>Options:</h3>
      <ul>
        <li>
          <Link title="Continue playing" to={routes.home()}>
            Continue playing
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);
