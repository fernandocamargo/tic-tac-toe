import flatten from 'lodash/flatten';
import times from 'lodash/times';
import constant from 'lodash/constant';

export const getColumns = row => (value, column) => ({
  coordinates: [row, column],
  value,
});

export const getRows = (slots, row) => slots.map(getColumns(row));

export default size =>
  flatten(times(size, constant(times(size, constant(null)))).map(getRows));
