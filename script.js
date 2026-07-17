function chooseBase(base) {
  const result = document.getElementById("result");

  if (base === "Rice") {
    result.textContent = "Try Healthy Chicken Curry or a Rice Bowl.";
  } else if (base === "Potatoes") {
    result.textContent = "Try Potato Wedges with Chicken or Shakshuka with potatoes.";
  } else if (base === "Wrap") {
    result.textContent = "Try Wrap-Based Pizza or a Chicken Caesar Wrap.";
  }
}
