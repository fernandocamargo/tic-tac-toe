import { string, shape, number } from 'prop-types';

export const displayName = 'Profile';

export const propTypes = {
  name: string.isRequired,
  avatar: string.isRequired,
  scoreboard: shape({
    win: number,
    draw: number,
    loss: number,
  }).isRequired,
};

export const defaultProps = {
  scoreboard: {
    win: 0,
    draw: 0,
    loss: 0,
  },
};
