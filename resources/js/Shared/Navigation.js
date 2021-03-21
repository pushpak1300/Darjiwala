import React, { useContext } from "react";
import { WizardContext } from './WizardContext';
export default (function (props) {
    var _a = useContext(WizardContext), counter = _a.counter, decrement = _a.decrement, increment = _a.increment;
    return (React.createElement("div", { className: "field is-grouped" },
        props.pos !== 'first' &&
        React.createElement("div", { className: "control" },
            React.createElement("button", { className: "button is-text", onClick: function () { return decrement(); } }, "Previous")),
        props.pos !== 'last' &&
            React.createElement("div", { className: "control" },
                React.createElement("button", { className: "button is-link ", onClick: function () { return increment(); } }, "Next"))));
});
