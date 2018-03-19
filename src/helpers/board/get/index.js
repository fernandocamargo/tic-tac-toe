export default ({ match: { params: { uuid } }, boards }) => boards[uuid] || {};
