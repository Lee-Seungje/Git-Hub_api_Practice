const input = document.querySelector(".input");
const button = document.querySelector("button");
const onChange = (ev) => {
    const Value = input.value;
    fetch(`https://api.github.com/users/${Value}`).then(res=>res.json())
    .then(json=>console.log(json));
}
button.addEventListener("click", onChange);