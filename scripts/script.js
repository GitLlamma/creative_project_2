document.getElementById("definitionbutton").addEventListener("click", function(event) {
  event.preventDefault();

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/bug";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let bugArray = json[0].meanings[0].definitions;
      let randNum = ((Math.random() * 100) % bugArray.length) | 0;
      let currDefinition = (bugArray[randNum].definition);
      console.log(currDefinition);
      let result = "";
      result += "<div class='definitionholder'>";
      result += "<h2>Bug</h2><h3>noun</h3><hr>";
      result += "<p>" + currDefinition + "</p></div>";
      document.getElementById("definitions").innerHTML = result;
    });
});
