export default ({
  data: { results: [{ name: { first, last }, picture: { large: avatar } }] },
}) => ({ name: [first, last].join(' '), avatar });
