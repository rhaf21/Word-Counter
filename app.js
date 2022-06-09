const textArea = document.getElementById("counter");
const charCount = document.querySelector(".return-char");
const wordCount = document.querySelector(".return-word");
const senCount = document.querySelector(".return-sen")
const parCount = document.querySelector(".return-par")
const btn = document.getElementById("clear-text");

function textAreaChangeEvent() {
  const textValue = textArea.value;
  const characters = textValue.length;

  charCount.textContent = `${characters}`;

  const words = textValue.match(/\b[-?(\w+)?]+\b/gi);
  const wordsCount = words[words.length - 1] === "" ? words.length - 1 : words.length;

  wordCount.textContent = `${wordsCount}`;

  const sentences = textValue.split(/[\.\?\!]\s/);
  const sensCount = sentences[sentences.length - 1] === "" ? sentences.length - 1 : sentences.length;

  senCount.textContent = `${sensCount}`;

  const paragraphs = textValue.replace(/\n$/gm, '').replace(/(^\s*)/gi, "").split(/\n/)
  const parsCount = paragraphs[paragraphs.length - 1] === "" ? paragraphs.length - 1 : paragraphs.length;

  parCount.textContent = `${parsCount}`;
}

textArea.addEventListener("input", textAreaChangeEvent);

btn.addEventListener("click", function () {
    textArea.value = "";
    charCount.textContent = 0;
    wordCount.textContent = 0;
    senCount.textContent = 0;
    parCount.textContent = 0;
})