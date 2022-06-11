function goToLatest(editor) {
  const vLink = document.querySelector("a[data-v]");

  location = vLink.dataset.v + "/" + (editor ? "editor.html" : "index.html");
}
function goToVersion(v, editor) {
  const versionLink = document.querySelector(`a[data-v="${v}"]`);
  if (versionLink) {
    location =
      versionLink.dataset.v + "/" + (editor ? "editor.html" : "index.html");
  }
}

// Complicated hash logic
function doHash() {
  if (location.hash === "#latest") {
    goToLatest(false);
  } else if (location.hash === "#latest-editor") {
    goToLatest(true);
  } else {
    const parseRegex = /(?:[\d]+\.)+[\d]+/;
    const editorRegex = /^#(?:[\d]+\.)+[\d]+-editor/;
    const playerRegex = /^#(?:[\d]+\.)+[\d]+$/;
    const parsedVer = location.hash.match(parseRegex);

    if (parsedVer) {
      if (location.hash.match(editorRegex)) {
        goToVersion(parsedVer, true);
      } else if (location.hash.match(playerRegex)) {
        goToVersion(parsedVer, false);
      }
    }
  }
}

window.addEventListener("hashchange", doHash);
doHash();
//automatic light/dark mode
if (localStorage.getItem("mode") == null) {
  if (window.matchMedia("(prefers-color-scheme: dark)")) {
    darkMode();
  } else {
    lightMode();
  }
} else if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

//light/dark mode functions
function darkMode() {
  localStorage.setItem("mode", "dark");
  document.getElementById("body").classList.add("dark");
  document.getElementById("header").style.backgroundColor = "#333333";
  document.getElementById("footer").style.backgroundColor = "#333333";
  addStylesheetRules([
    ["#specific-versions ul li a", ["color", "#f6ab3c"]],
    ["a.link", ["color", "#f6ab3c"]],
    ["#header h-item.button:hover", ["background-color", "#515151"]],
  ]);
}
function lightMode() {
  localStorage.setItem("mode", "light");
  document.getElementById("body").classList.remove("dark");
  document.getElementById("header").style.backgroundColor = "#2c6d31";
  document.getElementById("footer").style.backgroundColor = "#2c6d31";
  addStylesheetRules([
    ["#specific-versions ul li a", ["color", "#ff5300"]],
    ["a.link", ["color", "#ff5300"]],
    ["#header h-item.button:hover", ["background-color", "#255d2a"]],
  ]);
}
//the'addStylesheetRules' function is from https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
function addStylesheetRules(rules) {
  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  // Grab style element's sheet
  const styleSheet = styleEl.sheet;

  for (let i = 0; i < rules.length; i++) {
    let j = 1,
      rule = rules[i],
      selector = rule[0],
      propStr = "";
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (let pl = rule.length; j < pl; j++) {
      const prop = rule[j];
      propStr +=
        prop[0] + ": " + prop[1] + (prop[2] ? " !important" : "") + ";\n";
    }

    // Insert CSS Rule
    styleSheet.insertRule(
      selector + "{" + propStr + "}",
      styleSheet.cssRules.length
    );
  }
}
