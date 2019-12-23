/**
 * some epic like this
 */
export default (tasks: any, initContext: any) => {
  return new Promise(resolve => {
    tasks.reduce((acc: any, cur: any, curIndex: number, arr: any[]) => {
      return acc.then((x: any) => {
        // last promise,wait for final resove
        if (arr.length === curIndex + 1) {
          return cur(x).then((final: any) => resolve(final));
        } else {
          return cur(x);
        }
      });
    }, Promise.resolve(initContext));
  });
};
