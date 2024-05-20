document.addEventListener('DOMContentLoaded', function() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', function(event) {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        document.getElementById("convert_text").value = transcript;
    });

    document.getElementById('click_to_record').addEventListener('click', function() {
        recognition.start();
    });
});

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    if (window.pageYOffset > window.innerHeight / 100) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-blue");
    } else {
        nav.classList.remove("bg-blue");
        nav.classList.add("bg-transparent");
    }
});
