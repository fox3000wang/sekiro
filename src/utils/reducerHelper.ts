import { handleActions } from 'redux-actions';

/**
 * reducer utils
 * @param {*} state
 * @param {*} action
 */

export const returnPayload = (state: any, action: any) => {
  return action.payload;
};

export const mergePayload = (state: any, action: any) => {
  return Object.assign({}, state, action.payload);
};

export function createPayloadReducer<T>(type: string) {
  return handleActions<{ [key: string]: { payload: T } }, T>(
    {
      // todo type safe
      [type]: (state, action: any) => ({ ...state, ...action.payload }),
    },
    {}
  );
}
