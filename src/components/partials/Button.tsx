import React from "react";
import { css } from "@emotion/core";
import classNames from "classnames";

type ButtonProp = {
  disabled?: boolean;
  type?: "button" | "submit";
  medium?: boolean;
  large?: boolean;
};

const Button: React.FC<ButtonProp> = props => {
  const { children, disabled = false, type = "button" } = props;
  const buttonClassName = classNames({
    "my-button": true,
    "my-button--disabled": !!disabled,
    "my-button--medium": props.medium,
    "my-button--large": props.large,
  });

  return (
    <div
      className={buttonClassName}
      css={css`
        margin: 10px;
        display: inline-block;
      `}>
      <button
        disabled={disabled}
        type={type}
        css={css`
          outline: none;
          border: none;
          background-color: transparent;
          cursor: pointer;
        `}>
        {children}
      </button>
    </div>
  );
};

export default Button;
