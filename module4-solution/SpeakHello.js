(function (window) {

  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function () {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;

})(window);
