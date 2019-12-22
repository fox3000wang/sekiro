console.log("hellp");

[
  "drop",
  "dragover",
  "drag",
  "dragstart",
  "dragend",
  "dragover",
  "dragenter",
  "dragleave"
].forEach(item => {
  document.addEventListener(item, function(e: any) {
    e.preventDefault();
    e.stopPropagation();
  });
});
