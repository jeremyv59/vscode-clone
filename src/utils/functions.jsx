export const countLines = (divId) => {
  var element = document.getElementById(divId);
  var divHeight = element.offsetHeight;

  var lineHeight = parseInt(element.style.lineHeight);

  var lines = divHeight / lineHeight;

  return lines;
};
