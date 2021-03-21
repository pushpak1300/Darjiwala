import { useContext } from "react";
import { WizardContext } from './WizardContext';
export default (function (props) {
    var value = useContext(WizardContext);
    return props.children[value.count];
});
