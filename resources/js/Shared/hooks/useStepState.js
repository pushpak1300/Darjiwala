import * as React from "react";
export var useCounter = function (_a) {
    var _b = _a.initialCount, initialCount = _b === void 0 ? 0 : _b;
    var _c = React.useState(initialCount), count = _c[0], setCount = _c[1];
    var decrement = function () { return setCount(count - 1); };
    var increment = function () { return setCount(count + 1); };
    return { count: count, decrement: decrement, increment: increment };
};
