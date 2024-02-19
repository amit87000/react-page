import React from "react";
const Button = (props) => {
    return <button type={props.buttonType} className="button" style={{ color: '#000' }}>{props.name}</button>;
}
export default Button;