import * as React from "react";
import { WizardContext } from './WizardContext';
import { useCounter } from './hooks/useStepState';
export default (function (props) {
    var _a = useCounter({ initialCount: 0 }), count = _a.count, decrement = _a.decrement, increment = _a.increment;
    return (React.createElement(WizardContext.Provider, { value: { count: count, decrement: decrement, increment: increment } },
        React.createElement("progress", { className: "progress", value: ((count + 1) * (100 / 6)).toString(), max: "100" }),
        props.children));
});
