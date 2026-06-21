async function translateText() {

    let text = document.getElementById("inputText").value;

    let source =
    document.getElementById("sourceLang").value;

    let target =
    document.getElementById("targetLang").value;

    let url =
`https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

    let response = await fetch(url);

    let data = await response.json();

    document.getElementById("outputText").value =
    data.responseData.translatedText;
}

function copyText(){

    let output =
    document.getElementById("outputText");

    output.select();

    document.execCommand("copy");

    alert("Copied Successfully!");
}
function speakText() {

    let text =
        document.getElementById("outputText").value;

    let speech = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(speech);
}
function speakText() {

    let text = document.getElementById("outputText").value;

    if (text.trim() === "") {
        alert("Please translate some text first!");
        return;
    }

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = document.getElementById("targetLang").value;

    speech.rate = 1;   // Speed
    speech.pitch = 1;  // Voice pitch
    speech.volume = 1; // Volume

    window.speechSynthesis.speak(speech);
}