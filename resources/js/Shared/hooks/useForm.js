var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useState } from "react";
export var useForm = function () {
    var _a = useState({
        name: '', nameb: '', streetb: '', cityb: '', stateb: '', zipb: ''
    }), inputs = _a[0], setInputs = _a[1];
    var change = function (event) {
        event.persist();
        setInputs(function (inputs) {
            var _a;
            return (__assign({}, inputs, (_a = {}, _a[event.target.name] = event.target.value, _a)));
        });
    };
    return {
        change: change,
        inputs: inputs
    };
};
