function init() {
  const entryInput = document.getElementById('entryinput');
  const entryButton = document.getElementById('entrybutton');
  const textOutput = document.getElementById('textoutput');

  entryButton.addEventListener('click', function() {
    const inputText = entryInput.value;
    const name = "Aditya Kumar"; 
    const alertMessage = `${name}: ${inputText}`;
    
    alert(alertMessage);
    textOutput.textContent = inputText;
  });
}

window.addEventListener('load', init);
