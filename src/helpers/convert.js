exports.stringToNumber = (value) => {
  return String(value).replace(/\D/g, "");
};
