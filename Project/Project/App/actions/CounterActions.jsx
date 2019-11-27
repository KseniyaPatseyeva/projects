export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INIT = 'INIT';

export function increaseCount() {
  return ({ type: INCREMENT});
}

export function decreaseCount() {
  return ({ type: DECREMENT});
}

export function initCount() {
  return ({ type: INIT});
}