document.body.onload = function() {
  myFunction();
};

function myFunction() {
  let who = ["my dog", "my granma", "my turtle", "my bird"];
  let what = ["eated", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished my job",
    "during my lunch",
    "while I was praying"
  ];

  var num = who.length;
  var num2 = what.length;
  var num3 = when.length;

  var ramdomwho = Math.floor(Math.random() * num);
  var randomwhat = Math.floor(Math.random() * num2);
  var randomwhen = Math.floor(Math.random() * num3);

  document.getElementById("excuse").innerHTML =
    "You Will no belive <br>" +
    who[ramdomwho] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen];
}
