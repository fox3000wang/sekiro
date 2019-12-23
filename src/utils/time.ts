export function prefixZero(num: number, count: number): string {
  let numStr = `${num}`;
  while (numStr.length < count) {
    numStr = `0${numStr}`;
  }
  return numStr;
}

export function msToHms(millisecond: number) {
  const h = Math.floor(millisecond / 3600000);
  const m = Math.floor((millisecond % 3600000) / 60000);
  const s = Math.floor(((millisecond % 3600000) % 60000) / 1000);
  return {
    h,
    m,
    s,
  };
}

export function dateToISO8601(date: number = Date.now()) {
  const d = new Date(date);
  return (
    `${prefixZero(d.getUTCFullYear(), 4)}-` +
    `${prefixZero(d.getUTCMonth() + 1, 2)}-` +
    `${prefixZero(d.getUTCDate(), 2)}T` +
    `${prefixZero(d.getUTCHours(), 2)}:` +
    `${prefixZero(d.getUTCMinutes(), 2)}:` +
    `${prefixZero(d.getUTCSeconds(), 2)}Z`
  );
}
