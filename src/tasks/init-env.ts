export type AppEnv = {};

export default context => {
  const env: AppEnv = {};
  return Promise.resolve({ ...context, ...{ env } });
};
