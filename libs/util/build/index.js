"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitArray = void 0;
const splitArray = (arr, n) => {
    const groupLen = Math.ceil(arr.length / n);
    return [...Array(groupLen)].map((_, i) => arr.slice(i * n, (i + 1) * n));
};
exports.splitArray = splitArray;
