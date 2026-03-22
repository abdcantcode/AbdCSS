const predefinedStyles = [
  // ── BACKGROUND COLORS ──
  { name: "chai-bg-white", property: "backgroundColor", value: "white" },
  { name: "chai-bg-black", property: "backgroundColor", value: "black" },
  { name: "chai-bg-red", property: "backgroundColor", value: "red" },
  { name: "chai-bg-red-light", property: "backgroundColor", value: "#ff6666" },
  { name: "chai-bg-red-dark", property: "backgroundColor", value: "#990000" },
  { name: "chai-bg-blue", property: "backgroundColor", value: "blue" },
  { name: "chai-bg-blue-light", property: "backgroundColor", value: "#6699ff" },
  { name: "chai-bg-blue-dark", property: "backgroundColor", value: "#003399" },
  { name: "chai-bg-green", property: "backgroundColor", value: "green" },
  { name: "chai-bg-green-light", property: "backgroundColor", value: "#66cc66" },
  { name: "chai-bg-green-dark", property: "backgroundColor", value: "#006600" },
  { name: "chai-bg-yellow", property: "backgroundColor", value: "yellow" },
  { name: "chai-bg-yellow-light", property: "backgroundColor", value: "#ffff99" },
  { name: "chai-bg-yellow-dark", property: "backgroundColor", value: "#cccc00" },
  { name: "chai-bg-orange", property: "backgroundColor", value: "orange" },
  { name: "chai-bg-orange-light", property: "backgroundColor", value: "#ffcc88" },
  { name: "chai-bg-orange-dark", property: "backgroundColor", value: "#cc6600" },
  { name: "chai-bg-purple", property: "backgroundColor", value: "purple" },
  { name: "chai-bg-purple-light", property: "backgroundColor", value: "#cc88ff" },
  { name: "chai-bg-purple-dark", property: "backgroundColor", value: "#660099" },
  { name: "chai-bg-pink", property: "backgroundColor", value: "pink" },
  { name: "chai-bg-pink-dark", property: "backgroundColor", value: "#ff3399" },
  { name: "chai-bg-gray", property: "backgroundColor", value: "gray" },
  { name: "chai-bg-gray-light", property: "backgroundColor", value: "#cccccc" },
  { name: "chai-bg-gray-dark", property: "backgroundColor", value: "#444444" },
  { name: "chai-bg-transparent", property: "backgroundColor", value: "transparent" },

  // ── TEXT COLORS ──
  { name: "chai-text-white", property: "color", value: "white" },
  { name: "chai-text-black", property: "color", value: "black" },
  { name: "chai-text-red", property: "color", value: "red" },
  { name: "chai-text-red-light", property: "color", value: "#ff6666" },
  { name: "chai-text-red-dark", property: "color", value: "#990000" },
  { name: "chai-text-blue", property: "color", value: "blue" },
  { name: "chai-text-blue-light", property: "color", value: "#6699ff" },
  { name: "chai-text-blue-dark", property: "color", value: "#003399" },
  { name: "chai-text-green", property: "color", value: "green" },
  { name: "chai-text-green-light", property: "color", value: "#66cc66" },
  { name: "chai-text-green-dark", property: "color", value: "#006600" },
  { name: "chai-text-yellow", property: "color", value: "yellow" },
  { name: "chai-text-orange", property: "color", value: "orange" },
  { name: "chai-text-purple", property: "color", value: "purple" },
  { name: "chai-text-pink", property: "color", value: "pink" },
  { name: "chai-text-gray", property: "color", value: "gray" },
  { name: "chai-text-gray-light", property: "color", value: "#aaaaaa" },
  { name: "chai-text-gray-dark", property: "color", value: "#333333" },

  // ── FONT SIZE ──
  { name: "chai-text-xs", property: "fontSize", value: "10px" },
  { name: "chai-text-sm", property: "fontSize", value: "12px" },
  { name: "chai-text-base", property: "fontSize", value: "16px" },
  { name: "chai-text-lg", property: "fontSize", value: "20px" },
  { name: "chai-text-xl", property: "fontSize", value: "24px" },
  { name: "chai-text-2xl", property: "fontSize", value: "30px" },
  { name: "chai-text-3xl", property: "fontSize", value: "36px" },
  { name: "chai-text-4xl", property: "fontSize", value: "48px" },
  { name: "chai-text-5xl", property: "fontSize", value: "64px" },

  // ── FONT WEIGHT ──
  { name: "chai-text-thin", property: "fontWeight", value: "100" },
  { name: "chai-text-light", property: "fontWeight", value: "300" },
  { name: "chai-text-normal", property: "fontWeight", value: "400" },
  { name: "chai-text-medium", property: "fontWeight", value: "500" },
  { name: "chai-text-semibold", property: "fontWeight", value: "600" },
  { name: "chai-text-bold", property: "fontWeight", value: "700" },
  { name: "chai-text-extrabold", property: "fontWeight", value: "800" },
  { name: "chai-text-black-weight", property: "fontWeight", value: "900" },

  // ── TEXT ALIGN ──
  { name: "chai-text-left", property: "textAlign", value: "left" },
  { name: "chai-text-center", property: "textAlign", value: "center" },
  { name: "chai-text-right", property: "textAlign", value: "right" },
  { name: "chai-text-justify", property: "textAlign", value: "justify" },

  // ── FONT STYLE ──
  { name: "chai-italic", property: "fontStyle", value: "italic" },
  { name: "chai-not-italic", property: "fontStyle", value: "normal" },

  // ── TEXT DECORATION ──
  { name: "chai-underline", property: "textDecoration", value: "underline" },
  { name: "chai-line-through", property: "textDecoration", value: "line-through" },
  { name: "chai-no-underline", property: "textDecoration", value: "none" },

  // ── TEXT TRANSFORM ──
  { name: "chai-uppercase", property: "textTransform", value: "uppercase" },
  { name: "chai-lowercase", property: "textTransform", value: "lowercase" },
  { name: "chai-capitalize", property: "textTransform", value: "capitalize" },
  { name: "chai-normal-case", property: "textTransform", value: "none" },

  // ── LINE HEIGHT ──
  { name: "chai-leading-none", property: "lineHeight", value: "1" },
  { name: "chai-leading-tight", property: "lineHeight", value: "1.25" },
  { name: "chai-leading-snug", property: "lineHeight", value: "1.375" },
  { name: "chai-leading-normal", property: "lineHeight", value: "1.5" },
  { name: "chai-leading-relaxed", property: "lineHeight", value: "1.625" },
  { name: "chai-leading-loose", property: "lineHeight", value: "2" },

  // ── LETTER SPACING ──
  { name: "chai-tracking-tighter", property: "letterSpacing", value: "-0.05em" },
  { name: "chai-tracking-tight", property: "letterSpacing", value: "-0.025em" },
  { name: "chai-tracking-normal", property: "letterSpacing", value: "0em" },
  { name: "chai-tracking-wide", property: "letterSpacing", value: "0.025em" },
  { name: "chai-tracking-wider", property: "letterSpacing", value: "0.05em" },
  { name: "chai-tracking-widest", property: "letterSpacing", value: "0.1em" },

  // ── FONT FAMILY ──
  { name: "chai-font-sans", property: "fontFamily", value: "ui-sans-serif, system-ui, sans-serif" },
  { name: "chai-font-serif", property: "fontFamily", value: "ui-serif, Georgia, serif" },
  { name: "chai-font-mono", property: "fontFamily", value: "ui-monospace, monospace" },

  // ── DISPLAY ──
  { name: "chai-block", property: "display", value: "block" },
  { name: "chai-inline", property: "display", value: "inline" },
  { name: "chai-inline-block", property: "display", value: "inline-block" },
  { name: "chai-flex", property: "display", value: "flex" },
  { name: "chai-inline-flex", property: "display", value: "inline-flex" },
  { name: "chai-grid", property: "display", value: "grid" },
  { name: "chai-hidden", property: "display", value: "none" },

  // ── FLEXBOX ──
  { name: "chai-flex-row", property: "flexDirection", value: "row" },
  { name: "chai-flex-col", property: "flexDirection", value: "column" },
  { name: "chai-flex-row-reverse", property: "flexDirection", value: "row-reverse" },
  { name: "chai-flex-col-reverse", property: "flexDirection", value: "column-reverse" },
  { name: "chai-flex-wrap", property: "flexWrap", value: "wrap" },
  { name: "chai-flex-nowrap", property: "flexWrap", value: "nowrap" },
  { name: "chai-flex-1", property: "flex", value: "1 1 0%" },
  { name: "chai-flex-auto", property: "flex", value: "1 1 auto" },
  { name: "chai-flex-none", property: "flex", value: "none" },
  { name: "chai-justify-start", property: "justifyContent", value: "flex-start" },
  { name: "chai-justify-end", property: "justifyContent", value: "flex-end" },
  { name: "chai-justify-center", property: "justifyContent", value: "center" },
  { name: "chai-justify-between", property: "justifyContent", value: "space-between" },
  { name: "chai-justify-around", property: "justifyContent", value: "space-around" },
  { name: "chai-justify-evenly", property: "justifyContent", value: "space-evenly" },
  { name: "chai-items-start", property: "alignItems", value: "flex-start" },
  { name: "chai-items-end", property: "alignItems", value: "flex-end" },
  { name: "chai-items-center", property: "alignItems", value: "center" },
  { name: "chai-items-baseline", property: "alignItems", value: "baseline" },
  { name: "chai-items-stretch", property: "alignItems", value: "stretch" },
  { name: "chai-gap-0", property: "gap", value: "0px" },
  { name: "chai-gap-1", property: "gap", value: "4px" },
  { name: "chai-gap-2", property: "gap", value: "8px" },
  { name: "chai-gap-4", property: "gap", value: "16px" },
  { name: "chai-gap-6", property: "gap", value: "24px" },
  { name: "chai-gap-8", property: "gap", value: "32px" },

  // ── WIDTH ──
  { name: "chai-w-auto", property: "width", value: "auto" },
  { name: "chai-w-full", property: "width", value: "100%" },
  { name: "chai-w-screen", property: "width", value: "100vw" },
  { name: "chai-w-half", property: "width", value: "50%" },
  { name: "chai-w-1-3", property: "width", value: "33.333%" },
  { name: "chai-w-2-3", property: "width", value: "66.666%" },
  { name: "chai-w-1-4", property: "width", value: "25%" },
  { name: "chai-w-3-4", property: "width", value: "75%" },

  // ── HEIGHT ──
  { name: "chai-h-auto", property: "height", value: "auto" },
  { name: "chai-h-full", property: "height", value: "100%" },
  { name: "chai-h-screen", property: "height", value: "100vh" },
  { name: "chai-h-half", property: "height", value: "50%" },

  // ── POSITION ──
  { name: "chai-static", property: "position", value: "static" },
  { name: "chai-relative", property: "position", value: "relative" },
  { name: "chai-absolute", property: "position", value: "absolute" },
  { name: "chai-fixed", property: "position", value: "fixed" },
  { name: "chai-sticky", property: "position", value: "sticky" },

  // ── OVERFLOW ──
  { name: "chai-overflow-auto", property: "overflow", value: "auto" },
  { name: "chai-overflow-hidden", property: "overflow", value: "hidden" },
  { name: "chai-overflow-visible", property: "overflow", value: "visible" },
  { name: "chai-overflow-scroll", property: "overflow", value: "scroll" },
  { name: "chai-overflow-x-auto", property: "overflowX", value: "auto" },
  { name: "chai-overflow-x-hidden", property: "overflowX", value: "hidden" },
  { name: "chai-overflow-y-auto", property: "overflowY", value: "auto" },
  { name: "chai-overflow-y-hidden", property: "overflowY", value: "hidden" },

  // ── Z-INDEX ──
  { name: "chai-z-0", property: "zIndex", value: "0" },
  { name: "chai-z-10", property: "zIndex", value: "10" },
  { name: "chai-z-20", property: "zIndex", value: "20" },
  { name: "chai-z-30", property: "zIndex", value: "30" },
  { name: "chai-z-50", property: "zIndex", value: "50" },
  { name: "chai-z-auto", property: "zIndex", value: "auto" },

  // ── OPACITY ──
  { name: "chai-opacity-0", property: "opacity", value: "0" },
  { name: "chai-opacity-25", property: "opacity", value: "0.25" },
  { name: "chai-opacity-50", property: "opacity", value: "0.5" },
  { name: "chai-opacity-75", property: "opacity", value: "0.75" },
  { name: "chai-opacity-100", property: "opacity", value: "1" },

  // ── CURSOR ──
  { name: "chai-cursor-auto", property: "cursor", value: "auto" },
  { name: "chai-cursor-pointer", property: "cursor", value: "pointer" },
  { name: "chai-cursor-not-allowed", property: "cursor", value: "not-allowed" },
  { name: "chai-cursor-default", property: "cursor", value: "default" },
  { name: "chai-cursor-text", property: "cursor", value: "text" },
  { name: "chai-cursor-move", property: "cursor", value: "move" },

  // ── PADDING ──
  { name: "chai-p-0", property: "padding", value: "0px" },
  { name: "chai-p-1", property: "padding", value: "4px" },
  { name: "chai-p-2", property: "padding", value: "8px" },
  { name: "chai-p-3", property: "padding", value: "12px" },
  { name: "chai-p-4", property: "padding", value: "16px" },
  { name: "chai-p-5", property: "padding", value: "20px" },
  { name: "chai-p-6", property: "padding", value: "24px" },
  { name: "chai-p-8", property: "padding", value: "32px" },
  { name: "chai-p-10", property: "padding", value: "40px" },
  { name: "chai-p-12", property: "padding", value: "48px" },
  { name: "chai-px-0", property: "paddingLeft", value: "0px" },
  { name: "chai-px-0", property: "paddingRight", value: "0px" },
  { name: "chai-px-1", property: "paddingLeft", value: "4px" },
  { name: "chai-px-1", property: "paddingRight", value: "4px" },
  { name: "chai-px-2", property: "paddingLeft", value: "8px" },
  { name: "chai-px-2", property: "paddingRight", value: "8px" },
  { name: "chai-px-4", property: "paddingLeft", value: "16px" },
  { name: "chai-px-4", property: "paddingRight", value: "16px" },
  { name: "chai-px-6", property: "paddingLeft", value: "24px" },
  { name: "chai-px-6", property: "paddingRight", value: "24px" },
  { name: "chai-px-8", property: "paddingLeft", value: "32px" },
  { name: "chai-px-8", property: "paddingRight", value: "32px" },
  { name: "chai-py-0", property: "paddingTop", value: "0px" },
  { name: "chai-py-0", property: "paddingBottom", value: "0px" },
  { name: "chai-py-1", property: "paddingTop", value: "4px" },
  { name: "chai-py-1", property: "paddingBottom", value: "4px" },
  { name: "chai-py-2", property: "paddingTop", value: "8px" },
  { name: "chai-py-2", property: "paddingBottom", value: "8px" },
  { name: "chai-py-4", property: "paddingTop", value: "16px" },
  { name: "chai-py-4", property: "paddingBottom", value: "16px" },
  { name: "chai-py-6", property: "paddingTop", value: "24px" },
  { name: "chai-py-6", property: "paddingBottom", value: "24px" },
  { name: "chai-py-8", property: "paddingTop", value: "32px" },
  { name: "chai-py-8", property: "paddingBottom", value: "32px" },
  { name: "chai-pt-0", property: "paddingTop", value: "0px" },
  { name: "chai-pt-1", property: "paddingTop", value: "4px" },
  { name: "chai-pt-2", property: "paddingTop", value: "8px" },
  { name: "chai-pt-4", property: "paddingTop", value: "16px" },
  { name: "chai-pt-6", property: "paddingTop", value: "24px" },
  { name: "chai-pt-8", property: "paddingTop", value: "32px" },
  { name: "chai-pb-0", property: "paddingBottom", value: "0px" },
  { name: "chai-pb-1", property: "paddingBottom", value: "4px" },
  { name: "chai-pb-2", property: "paddingBottom", value: "8px" },
  { name: "chai-pb-4", property: "paddingBottom", value: "16px" },
  { name: "chai-pb-6", property: "paddingBottom", value: "24px" },
  { name: "chai-pb-8", property: "paddingBottom", value: "32px" },
  { name: "chai-pl-0", property: "paddingLeft", value: "0px" },
  { name: "chai-pl-1", property: "paddingLeft", value: "4px" },
  { name: "chai-pl-2", property: "paddingLeft", value: "8px" },
  { name: "chai-pl-4", property: "paddingLeft", value: "16px" },
  { name: "chai-pl-6", property: "paddingLeft", value: "24px" },
  { name: "chai-pl-8", property: "paddingLeft", value: "32px" },
  { name: "chai-pr-0", property: "paddingRight", value: "0px" },
  { name: "chai-pr-1", property: "paddingRight", value: "4px" },
  { name: "chai-pr-2", property: "paddingRight", value: "8px" },
  { name: "chai-pr-4", property: "paddingRight", value: "16px" },
  { name: "chai-pr-6", property: "paddingRight", value: "24px" },
  { name: "chai-pr-8", property: "paddingRight", value: "32px" },

  // ── MARGIN ──
  { name: "chai-m-0", property: "margin", value: "0px" },
  { name: "chai-m-1", property: "margin", value: "4px" },
  { name: "chai-m-2", property: "margin", value: "8px" },
  { name: "chai-m-3", property: "margin", value: "12px" },
  { name: "chai-m-4", property: "margin", value: "16px" },
  { name: "chai-m-5", property: "margin", value: "20px" },
  { name: "chai-m-6", property: "margin", value: "24px" },
  { name: "chai-m-8", property: "margin", value: "32px" },
  { name: "chai-m-10", property: "margin", value: "40px" },
  { name: "chai-m-12", property: "margin", value: "48px" },
  { name: "chai-m-auto", property: "margin", value: "auto" },
  { name: "chai-mx-auto", property: "marginLeft", value: "auto" },
  { name: "chai-mx-auto", property: "marginRight", value: "auto" },
  { name: "chai-mx-1", property: "marginLeft", value: "4px" },
  { name: "chai-mx-1", property: "marginRight", value: "4px" },
  { name: "chai-mx-2", property: "marginLeft", value: "8px" },
  { name: "chai-mx-2", property: "marginRight", value: "8px" },
  { name: "chai-mx-4", property: "marginLeft", value: "16px" },
  { name: "chai-mx-4", property: "marginRight", value: "16px" },
  { name: "chai-mx-6", property: "marginLeft", value: "24px" },
  { name: "chai-mx-6", property: "marginRight", value: "24px" },
  { name: "chai-mx-8", property: "marginLeft", value: "32px" },
  { name: "chai-mx-8", property: "marginRight", value: "32px" },
  { name: "chai-my-0", property: "marginTop", value: "0px" },
  { name: "chai-my-0", property: "marginBottom", value: "0px" },
  { name: "chai-my-1", property: "marginTop", value: "4px" },
  { name: "chai-my-1", property: "marginBottom", value: "4px" },
  { name: "chai-my-2", property: "marginTop", value: "8px" },
  { name: "chai-my-2", property: "marginBottom", value: "8px" },
  { name: "chai-my-4", property: "marginTop", value: "16px" },
  { name: "chai-my-4", property: "marginBottom", value: "16px" },
  { name: "chai-my-6", property: "marginTop", value: "24px" },
  { name: "chai-my-6", property: "marginBottom", value: "24px" },
  { name: "chai-my-8", property: "marginTop", value: "32px" },
  { name: "chai-my-8", property: "marginBottom", value: "32px" },
  { name: "chai-mt-0", property: "marginTop", value: "0px" },
  { name: "chai-mt-1", property: "marginTop", value: "4px" },
  { name: "chai-mt-2", property: "marginTop", value: "8px" },
  { name: "chai-mt-4", property: "marginTop", value: "16px" },
  { name: "chai-mt-6", property: "marginTop", value: "24px" },
  { name: "chai-mt-8", property: "marginTop", value: "32px" },
  { name: "chai-mb-0", property: "marginBottom", value: "0px" },
  { name: "chai-mb-1", property: "marginBottom", value: "4px" },
  { name: "chai-mb-2", property: "marginBottom", value: "8px" },
  { name: "chai-mb-4", property: "marginBottom", value: "16px" },
  { name: "chai-mb-6", property: "marginBottom", value: "24px" },
  { name: "chai-mb-8", property: "marginBottom", value: "32px" },
  { name: "chai-ml-0", property: "marginLeft", value: "0px" },
  { name: "chai-ml-1", property: "marginLeft", value: "4px" },
  { name: "chai-ml-2", property: "marginLeft", value: "8px" },
  { name: "chai-ml-4", property: "marginLeft", value: "16px" },
  { name: "chai-ml-6", property: "marginLeft", value: "24px" },
  { name: "chai-ml-8", property: "marginLeft", value: "32px" },
  { name: "chai-mr-0", property: "marginRight", value: "0px" },
  { name: "chai-mr-1", property: "marginRight", value: "4px" },
  { name: "chai-mr-2", property: "marginRight", value: "8px" },
  { name: "chai-mr-4", property: "marginRight", value: "16px" },
  { name: "chai-mr-6", property: "marginRight", value: "24px" },
  { name: "chai-mr-8", property: "marginRight", value: "32px" },
];

let customStylesArray = JSON.parse(localStorage.getItem("output")) || [];

let htmlInput = document.getElementById("htmlEditor");
let playBox = document.getElementById("playBox");
let output = document.getElementById("output");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementById("deleteBtn");
const propertySelect = document.getElementById("property");

let arrayOfStyles = Object.keys(document.body.style);

(function () {
  arrayOfStyles.forEach((style) => {
    let opt = document.createElement("option");
    opt.value = style;
    opt.textContent = style;
    propertySelect.appendChild(opt);
  });
})();

function applyStyles() {
  const allStyles = [...predefinedStyles, ...customStylesArray];
  const elements = playBox.querySelectorAll("[class]");

  elements.forEach((element) => {
    allStyles.forEach((rule) => {
      element.style[rule.property] = "";
    });

    allStyles.forEach((rule) => {
      if (element.classList.contains(rule.name)) {
        element.style[rule.property] = rule.value;
      }
    });
  });
}

htmlInput.addEventListener("input", () => {
  playBox.innerHTML = htmlInput.value; 
  applyStyles(); 
});

addBtn.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let property = propertySelect.value;
  let value = document.getElementById("value").value;
  let ExistingStyle = predefinedStyles.some((style) => {
    return style.property===property && style.value===value;
  });

  let duplicateAlert = customStylesArray.some((obj) => obj.name === name);
  if (duplicateAlert) {
    alert(
      "A style with the same name already exists. Please try something else.",
    );
    return;
  } else if (ExistingStyle) {
    alert(
      "You have a pre-defined style with the same property & value. Try something different.",
    );
    return;
  } else {
    customStylesArray.push({ name: name, property: property, value: value });
    localStorage.setItem("output", JSON.stringify(customStylesArray));
    output.innerText = JSON.stringify(customStylesArray, null, 2);
    applyStyles();
  }
});

deleteBtn.addEventListener("click", () => {
  if (customStylesArray.length === 0) {
    alert("No styles have been declared yet.");
    return;
  }

  let deleteName = document.getElementById("deleteName").value;
  customStylesArray = customStylesArray.filter((obj) => {
    return deleteName !== obj.name;
  });
  localStorage.setItem("output", JSON.stringify(customStylesArray));
  output.innerText = JSON.stringify(customStylesArray, null, 2);
  applyStyles();
});

window.addEventListener("DOMContentLoaded", () => {
  playBox.innerHTML = htmlInput.value; 
  applyStyles();
  output.innerText = JSON.stringify(customStylesArray, null, 2);
});

