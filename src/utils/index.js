/**
 *
 * @param {string} type
 * @param {number} value
 * @returns validate and return the dimension
 */

import { NUMBER, WIDTH } from "../constants";

export const validateDimension = (type, value) => {
  const dimension = validateResolution(type, value);
  const defaultDimension = 200;
  if (
    !isNaN(dimension) &&
    typeof dimension === NUMBER &&
    dimension >= defaultDimension
  ) {
    return `${dimension}px`;
  }
  return `${defaultDimension}px`;
};

/**
 *
 * @param {string} type
 * @param {number} value
 * @returns validate and return the valid width and height
 */

const validateResolution = (type, value) => {
  const screenWidth = window.screen.availWidth - 100;
  const screenHeight = window.screen.availHeight - 300;
  if (type === WIDTH) {
    return screenWidth < value ? screenWidth : value;
  }
  return screenHeight < value ? screenHeight : value;
};
