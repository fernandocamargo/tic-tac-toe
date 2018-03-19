export default number => ({
  between: (min, max) => ((number - min) ^ (number - (max + 1))) < 0,
});
