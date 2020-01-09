import { dateToISO8601 } from './time';
import { replaceUrlWithGetSchema } from './url-utils';
import { get } from 'lodash';

type ApiArg = { url: string; data: any };
/**
 * 所有 api 返回的是一个高阶函数, args 是这个 api 的参数,因为有的参数会反映到 url,有的反映到 header 上.需要每个 api 解析 args
 */
export function courseInfo() {
  return (args: ApiArg) => {
    const schema = replaceUrlWithGetSchema('/courseInfo', args);
    return {
      method: 'post',
      path: schema.url,
      payload: schema.data,
    };
  };
}

export function user() {
  return () => ({
    method: 'get',
    path: '/user',
  });
}

export function lessonInfo() {
  return (args: ApiArg) => {
    const schema = replaceUrlWithGetSchema('/awjcls_lessons/{lessonId}', args);
    return {
      method: 'get',
      path: schema.url,
      payload: schema.data,
    };
  };
}

// 请求的层级越深入,api的位置越上面. 否则mock的时候曾泽有限匹配下面的请求了.
export function dynamicKey() {
  return (args: ApiArg) => {
    const schema = replaceUrlWithGetSchema('/room/{channel}/relationships/dynamicKey', args);
    return {
      method: 'get',
      path: schema.url,
      payload: schema.data,
    };
  };
}

export function roomInfo() {
  return (args: ApiArg) => {
    const schema = replaceUrlWithGetSchema('/room/{channel}', args);
    return {
      method: 'get',
      path: schema.url,
      payload: schema.data,
    };
  };
}

export type UserDevice = {
  deviceUuid: string;
  deviceName?: string;
  deviceType: string;
  deviceBrand?: string;
  osName: string;
  osVersion?: string;
  cpuName: string;
  memory: number;
  appVersion?: string;
  screenWidth?: number;
  screenHigh?: number;
};
export function userDevice() {
  return (args: UserDevice) => {
    const schema = replaceUrlWithGetSchema('/user/device', args);

    return {
      headers: {
        'content-type': 'application/json',
      },
      method: 'post',
      path: schema.url,
      payload: schema.data,
    };
  };
}

export function resolution() {
  return (args: ApiArg) => {
    const schema = replaceUrlWithGetSchema('/user/device/{channel}/resolution', args);
    return {
      method: 'get',
      path: schema.url,
      payload: schema.data,
    };
  };
}

export function canSend() {
  return () => ({
    method: 'get',
    path: 'helps/can_send',
  });
}
export function send() {
  return (body: any) => ({
    method: 'post',
    path: 'helps/send_with_device_info',
    payload: body,
    'content-type': 'application/json',
  });
}
export function resolve() {
  return () => ({
    method: 'post',
    path: 'helps/resolve',
  });
}

export function deviceReport() {
  return (repo: any) => ({
    method: 'post',
    path: 'prepare_infos',
    payload: repo,
  });
}

export function leaveChannel() {
  return (arg: { roomId: string; uid: string; name: string; type: string }) => {
    const value = dateToISO8601(Date.now());
    const roomid = get(arg, 'roomId');
    const uid = get(arg, 'uid');
    const name = get(arg, 'name');
    const type = get(arg, 'type');
    return {
      method: 'post',
      path: 'userActivity',
      payload: {
        data: {
          type: 'userActivity',
          attributes: {
            activityValue: value,
            occurrenceTime: value,
            roomUuid: roomid,
            user: {
              uid: uid, // todo
              name: name, //
              type: type, // teacher
            },
            activity: {
              name: 'LEAVE_CHANNEL',
            },
          },
        },
      },
    };
  };
}

export function checkInState() {
  return () => ({
    method: 'get',
    path: 'teachers/checkin_status',
  });
}

export function sendLog() {
  return (uuid: string, data: any) => ({
    method: 'post',
    path: `debug_infos/send?uuid=${uuid}`,
    headers: {
      'Content-Type': 'application/zip',
    },
    payload: data,
  });
}

// type UserType = 'USER' | 'TPUSER';
export function login() {
  return (arg: {
    username: string;
    password: string;
    userType: string; // todo 这个 userType 只有可能是 'USER' | 'TPUSER';
    serviceName: string;
  }) => ({
    method: 'post',
    path: 'login/app',
    payload: arg,
  });
}

export function renewAccessToken() {
  return (payload: { refreshToken: string; accessToken: string }) => ({
    method: 'post',
    path: 'accessTokens',
    payload: payload,
  });
}

export function sendActivity() {
  return (payload: any) => ({
    method: 'post',
    path: 'userActivity',
    payload: payload,
  });
}

export function sendActivities() {
  return (payload: any) => ({
    method: 'post',
    path: 'userActivity/batch',
    payload: payload,
  });
}

export function getExtraInfos() {
  return (payload: any) => ({
    method: 'get',
    path: 'students/extra_infos',
    payload: payload,
  });
}

export function getAiFaceInfoApi() {
  return (payload: any) => ({
    method: 'post',
    path: 'face/detect',
    payload: payload,
  });
}
// createBaseAocData({ name, value }) {
//   return {
//     type: 'userActivity',
//     attributes: {
//       activityValue: value,
//       occurrenceTime: dateToISO8601(Date.now()),
//       roomUuid: this.roomId,
//       user: {
//         uid: this.uid,
//         name: this.name,
//         type: this.type,
//       },
//       activity: {
//         name,
//       },
//     },
//   };
// }

// createAocData({ name, value }) {
//   return JSON.stringify({
//     data: this.createBaseAocData({ name, value }),
//   });
// }

export function sendSignal() {
  return (payload: { roomId: string; commandName: string }) => {
    const roomId = get(payload, 'roomId');
    const commandName = get(payload, 'commandName');

    return {
      method: 'post',
      path: `room/${roomId}/signaling/${commandName}`,
      payload: {
        commandVersion: 1,
        source: 'aoc-desktop',
        ...payload,
      },
    };
  };
}

export function getUpcomingLesson() {
  return () => ({
    method: 'get',
    path: 'awjcls_lessons/upcoming_lesson',
  });
}
