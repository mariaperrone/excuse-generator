window.onload = function() {
  var random = Math.random() * 10;
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#exc1").innerHTML = generarExcusa();
  });
};

var generarExcusa = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let which = ["my homework", "my toe", "my car", "my shoe"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whichIndex = Math.floor(Math.random() * which.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    which[whichIndex] +
    " " +
    when[whenIndex]
  );
};
