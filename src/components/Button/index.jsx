import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", square: "rounded-none" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    black_900: "bg-black-900 text-white-A700",
    green_200: "bg-green-200 text-teal-800",
  },
  outline: {
    light_blue_50:
      "outline outline-[1px] outline-light_blue-50 text-light_blue-50",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-3", md: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "xs",
  variant = "fill",
  color = "green_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "black_900",
    "green_200",
    "light_blue_50",
  ]),
};

export { Button };
