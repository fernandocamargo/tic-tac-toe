import {
  compose,
  withStateHandlers,
  withHandlers,
  withProps,
  lifecycle,
} from 'recompose';
import { withRouter } from 'react-router-dom';

import state from './initial-state';
import * as reducers from './reducers';
import handlers from './handlers';
import props from './props';
import events from './events';

export default compose(
  withRouter,
  withStateHandlers(state, reducers),
  withHandlers(handlers),
  withProps(props),
  lifecycle(events),
);
