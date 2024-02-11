import React from "react";
import './Button.css';

const Button = (props) => {
    return(
        <button {...props} className={'button_' + props.className} />
    );
};

export default Button;