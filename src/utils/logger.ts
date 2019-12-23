/**
 * Created Date: 2018-02-12T20:03:31+08:00
 * Author: xuexin.Li
 * -----
 * Last Modified: 2018-09-27T07:08:18+08:00
 * Modified By: xuexin.Li (xuexin.li@alo7.com>)
 * -----
 * Copyright (c) 2018 www.alo7.com
 * ------------------------------------
 * Javascript will save your soul!
 */
// import StackTrace from 'stacktrace-js';
import { ipcConsole } from './ipc-connector';
import { remote } from 'electron';
import { events, as } from './Analytics';
import { isObject } from 'lodash';

// function getTrace() {
//   return new Promise(resolve => {
//     StackTrace.get()
//       .then(stackframes => {
//         const st = stackframes[3];
//         const trace = `[${st.lineNumber}:${st.columnNumber}] ${st.fileName} ${st.functionName}`;
//         resolve(trace);
//       })
//       .catch(() => {
//         resolve('no stack trace');
//       });
//   });
// }

type messagesType = Array<string | object>;
type flatMsgType = (msgs: any[]) => string;

const colorMap = {
  error: '#d73a49',
  warn: '#e36209',
  info: '#6f42c1',
  debug: '#CC9900',
};

const repeat = (str: string, times: number) => new Array(times + 1).join(str);

const pad = (num: number, maxLength: number) =>
  repeat('0', maxLength - num.toString().length) + num;

const formatTime = (time: Date) =>
  `${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(
    time.getMilliseconds(),
    3
  )}`;

// 把所有 message 变成一个字符串, 因为不知道服务器那边能否发送 array or object
const flatMsg: flatMsgType = msgs =>
  msgs.reduce((p, a) => (isObject(a) ? `${p} ${JSON.stringify(a)}` : `${p} ${a}`));

function originLog(level: string, messages: messagesType) {
  // if (get(process, 'env.NODE_ENV') === 'development') {
  const timestamp = formatTime(new Date());
  const titleColor = colorMap[level] || 'black';

  if (messages.length <= 1) {
    messages.forEach(msg => {
      const format = isObject(msg) ? '%O' : '';
      if (console[level])
        console[level](
          `%c USER %s%c @%s${format}`,
          `color: ${titleColor}; font-weight: bold`,
          level,
          'color: #999999; font-size: 12px; font-weight: lighter;',
          timestamp,
          msg
        );
    });
  } else {
    console.group(
      '%c USER %s %c @%s',
      `color: ${titleColor}`,
      level,
      'color: #999999; font-size: 12px; font-weight: lighter;',
      timestamp
    );

    messages.forEach(msg => {
      const format = isObject(msg) ? '%O' : '';
      if (console[level]) console[level](format, msg);
    });

    console.groupEnd();
  }

  ipcConsole(level, flatMsg(messages));
}

function baseLog(level: string) {
  return (...messages: messagesType) => {
    originLog(level, messages);
  };
}

function traceLog(level: string) {
  return (...messages: messagesType) => {
    originLog(level, messages);
    if (level === 'warn' && !remote.getGlobal('runtime').mockServer) {
      as.emit(
        events.CONSOLE_PRINT,
        {
          console_print: flatMsg(messages),
        },
        level
      );
    }
  };
}

const isDevelop = remote.getGlobal('runtime').isDevelop;

// 处理error log 下如果是开发环境打印 error.stack 信息 如果是正式环境打印 error.message 信息
function errorMessageHandler() {
  return (param: { title: string; err: any }) => {
    return isDevelop ? param.err.stack : param.title + (param.err.message || 'unknow error');
  };
}

export const parseError = errorMessageHandler();

export const error = traceLog('error');

export const warn = traceLog('warn');

export const info = baseLog('info');

export const verbose = baseLog('verbose');

export const debug = baseLog('debug');

export const silly = baseLog('silly');
