const faqData = [
	{
		q: "How accurate is the speech recognition?",
		a: "Our ASR technology is designed to provide high accuracy, but the quality can depend on factors like background noise and clarity of speech.",
	},
	{
		q: "How accurate is the speech recognition?",
		a: "Our ASR technology is designed to provide high accuracy, but the quality can depend on factors like background noise and clarity of speech.",
	},
	{
		q: "How accurate is the speech recognition?",
		a: "Our ASR technology is designed to provide high accuracy, but the quality can depend on factors like background noise and clarity of speech.",
	},
	{
		q: "How accurate is the speech recognition?",
		a: "Our ASR technology is designed to provide high accuracy, but the quality can depend on factors like background noise and clarity of speech.",
	},
	{
		q: "How accurate is the speech recognition?",
		a: "Our ASR technology is designed to provide high accuracy, but the quality can depend on factors like background noise and clarity of speech.",
	},
];

const faqContainer = document.querySelector(".faqContainer");
faqData.forEach((data, index) => {
	const faqCard = document.createElement("div");
	faqCard.classList.add("faqCard");
	if (index === 0) {
		faqCard.classList.add("open");
	}
	faqCard.innerHTML = `
    <div class="faqTitleDiv">
        <h2 class="faqTitle">
            ${data.q}
        </h2>
        <div class="faqButton">
            <i class="fa-solid fa-chevron-right faqArrow"></i>
        </div>
    </div>
    <div class="faqContent">
        <p class="faqText">
            ${data.a}
        </p>
    </div>
`;
	faqContainer.appendChild(faqCard);
});

window.addEventListener("scroll", function () {
	var nav = document.querySelector("nav");
	if (window.pageYOffset > window.innerHeight / 10) {
		nav.classList.remove("bg-transparent");
		nav.classList.add("bg-blue");
	} else {
		nav.classList.remove("bg-blue");
		nav.classList.add("bg-transparent");
	}
});

const faqButtons = document.querySelectorAll(".faqButton");
faqButtons.forEach((button) => {
	button.addEventListener("click", () => {
		button.parentElement.parentElement.classList.toggle("open");
	});
});
