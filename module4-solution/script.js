
(function (window){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var name in names) {
    var firstLetter = names[name].charAt(0);
    firstLetter = firstLetter.toLowerCase();

    window.name = names[name];

    if (firstLetter == 'j') {
      byeSpeaker.speak();
    } else {
      helloSpeaker.speak();

    }
  };
})(window);
