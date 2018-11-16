$(document).ready(function() {
  const getTime = function getTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    // return time;
    $("#clock").empty();
    $("#clock").append(time);
  };

  let timer = setInterval(getTime, 1000);
});
