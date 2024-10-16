let philosopherCheckbox = document.getElementById("philosopher-checkbox");
let philosopherElements = document.getElementsByClassName("philosopher");
let rangeElements = document.getElementsByClassName("range");
let philosophersEnabled = localStorage.getItem("philosophersEnabled");
console.log(philosophersEnabled);

if (philosophersEnabled === "true") {
    philosopherCheckbox.checked = true;
} else {
    Array.from(philosopherElements).forEach((node) => node.style.opacity="0");
    Array.from(rangeElements).forEach((node) => node.style.top="-80px");
    philosopherCheckbox.checked = false;
}

philosopherCheckbox.addEventListener("change", () => {
    if (philosopherCheckbox.checked) {
        Array.from(philosopherElements).forEach((node) => node.style.opacity="1");
        Array.from(rangeElements).forEach((node) => node.style.top="-130px");
        localStorage.setItem("philosophersEnabled", "true");
    } else {
        Array.from(philosopherElements).forEach((node) => node.style.opacity="0");
        Array.from(rangeElements).forEach((node) => node.style.top="-80px");
        localStorage.setItem("philosophersEnabled", "false");
    }
});