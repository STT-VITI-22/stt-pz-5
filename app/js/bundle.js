const actions = ["+", "-", "*", "/", ".", "%"];

const dashboard = document.getElementById("dashboard");

function printAction(val) {
  if (val === "+/-") {
    let firstDigit = dashboard.value[0];
    if (firstDigit === "-") {
      dashboard.value = dashboard.value.slice(1, dashboard.value.length);
    } else {
      dashboard.value = "-" + dashboard.value;
    }
  } else if (
    actions.includes(dashboard.value[dashboard.value.length - 1]) ||
    dashboard.value.length === 0
  ) {
  } else {
    dashboard.value += val;
  }
}

function printDigit(val) {
  dashboard.value += val;
}

function solve() {
  let expression = dashboard.value;
  dashboard.value = math.evaluate(expression);
}

function clr() {
  dashboard.value = "";
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.querySelector("body").className = themeName;
}

function toggleTheme() {
  let theme = localStorage.getItem("theme");

  if (theme === "theme-second") {
    theme = "theme-one";
  } else if (theme === "theme-one") {
    theme = "theme-second";
  }
  setTimeout(() => {
    setTheme(theme);
  }, 500);
}

function save() {
  localStorage.setItem("result", dashboard.value);
}

function paste() {
  printDigit(localStorage.getItem("result"));
}

setTheme("theme-one");
