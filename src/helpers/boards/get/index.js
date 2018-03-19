import values from 'lodash/values';

import * as board from 'helpers/board';

export default ({ users, boards }) => values(boards).map(board.format(users));
