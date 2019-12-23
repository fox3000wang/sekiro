/// <reference path="./typings/index.d.ts" />
import reducePromise from "./utils/reducePromise";
import tasks from "./tasks";
import "./index.css";

reducePromise(tasks, {}).then((context: any) => {
  const {
    actions: {
      common: { setIsReady }
    }
  } = context;
  setIsReady(true);
});

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
