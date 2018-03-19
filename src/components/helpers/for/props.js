import ensure from 'lodash/concat';

import clone from 'helpers/rendering/clone';

export default ({ each, children }) => ({
  iterator: ensure(each).map(clone(children)),
});
