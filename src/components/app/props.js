import * as location from 'helpers/location';
import * as profile from 'helpers/profile';
import * as boards from 'helpers/boards';
import * as board from 'helpers/board';

export default props => ({
  page: location.get(props),
  profile: profile.get(props),
  boards: boards.get(props),
  board: board.get(props),
});
