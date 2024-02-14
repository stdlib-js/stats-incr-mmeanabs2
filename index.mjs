// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s){var i;if(!t(s))throw new TypeError(r("invalid argument. Must provide a positive integer. Value: `%s`.",s));return i=e(s),function(t){if(0===arguments.length)return i();return i(t*t)}}export{s as default};
//# sourceMappingURL=index.mjs.map
