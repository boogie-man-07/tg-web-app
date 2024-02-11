import React from "react";

const Button = () => {
    return(
        <button {...props} className={'button_' + props.className} />
    );
};

export default Button;