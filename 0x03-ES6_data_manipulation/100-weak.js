/* eslint-disable no-plusplus */
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;
  called++;
  if (called >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, called);
}
