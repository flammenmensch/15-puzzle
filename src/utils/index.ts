import { Direction } from '../interfaces';

export const rand = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomArrayElement = function <T>(array: Array<T>): T {
  return array[rand(0, array.length - 1)];
};

export const getDirectionByKeyCode = (keyCode: number): Direction | null => {
  switch (keyCode) {
    case 37:
      return Direction.LEFT;
    case 38:
      return Direction.UP;
    case 39:
      return Direction.RIGHT;
    case 40:
      return Direction.DOWN;
    default:
      return null;
  }
};
