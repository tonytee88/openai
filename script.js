function callScriptFunction() {
google.script.run.withSuccessHandler(updateOutput).myScriptFunction();
}

function updateOutput(result) {
var output = document.getElementById('output');
output.innerText = result;
}
