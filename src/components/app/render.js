import React from 'react';
import classnames from 'classnames';

import Home from 'components/pages/home';
import Scoreboard from 'components/pages/scoreboard';
import Boards from 'components/pages/boards';
import Board from 'components/pages/board';

import './styles.css';

export default props => {
  const { page, ready } = props;

  return (
    ready && (
      <div className={classnames('game', page)}>
        <div className="pages">
          <Home {...props} />
          <Scoreboard {...props} />
          <Boards {...props} />
          <Board {...props} />
        </div>
      </div>
    )
  );
};
