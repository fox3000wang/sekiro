import initStore from "./init-store";
import initUI from "./init-ui";

// 初始化任务列表,按顺序执行
export default [initStore, initUI];
