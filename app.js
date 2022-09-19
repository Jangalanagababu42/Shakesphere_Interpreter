var transalte = document.querySelector("#button_translate");
var textInput = document.querySelector("#text-input");
var Output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function clickHandler() {
  var Text = textInput.value;
  if(Text!==""){
  fetch(getTranslationURL(Text))
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var translatedText = json.contents.translated;
      Output.innerText = translatedText;
    })
    .catch(errorHandler);}
  else{
  Text.disabled = true;
  }
}

function errorHandler(error) {
  console.log("Error Occured", error);
  alert("something wrong with Server! Please try again after some time");
}

transalte.addEventListener("click", clickHandler);
