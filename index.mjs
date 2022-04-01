// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var r=t.isPrimitive,s=e,n=i;var m=function(t){var e;if(!r(t))throw new TypeError(n("invalid argument. Must provide a positive integer. Value: `%s`.",t));return e=s(t),function(t){if(0===arguments.length)return e();return e(t*t)}};export{m as default};
//# sourceMappingURL=index.mjs.map
