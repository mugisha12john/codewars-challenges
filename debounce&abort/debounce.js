const defautlt = document.getElementById("default");
const debounce = document.getElementById("debounce");
const throt = document.getElementById("throttling");
const input = document.getElementById("input");
input.addEventListener("input", () => {
  defautlt.innerText = input.value;
  updateDebounceText(input.value);
});

const updateDebounceText = debounceFn((text) => {
  debounce.innerText = text;
});

function debounceFn(callback, delay = 1000) {
  let timer;
  return (...arg) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      callback(...arg);
    }, delay);
  };
}
