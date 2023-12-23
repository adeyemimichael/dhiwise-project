import React from "react";

const sizeClasses = {
  txtBricolageGrotesqueSemiBold48WhiteA700:
    "font-bricolagegrotesque font-semibold",
  txtBricolageGrotesqueSemiBold64: "font-bricolagegrotesque font-semibold",
  txtBricolageGrotesqueSemiBold32: "font-bricolagegrotesque font-semibold",
  txtBricolageGrotesqueSemiBold72: "font-bricolagegrotesque font-semibold",
  txtBricolageGrotesqueMedium128: "font-bricolagegrotesque font-medium",
  txtLexendDecaSemiBold48: "font-lexenddeca font-semibold",
  txtLexendDecaSemiBold16: "font-lexenddeca font-semibold",
  txtLexendDecaMedium20: "font-lexenddeca font-medium",
  txtLexendDecaMedium16Teal800: "font-lexenddeca font-medium",
  txtLexendDecaMedium32: "font-lexenddeca font-medium",
  txtLexendDecaMedium32Black900: "font-lexenddeca font-medium",
  txtBricolageGrotesqueMedium200: "font-bricolagegrotesque font-medium",
  txtBricolageGrotesqueMedium32: "font-bricolagegrotesque font-medium",
  txtLexendDecaMedium24: "font-lexenddeca font-medium",
  txtLexendDecaMedium14: "font-lexenddeca font-medium",
  txtLexendDecaMedium16: "font-lexenddeca font-medium",
  txtNewSunYandiDesigns32: "font-newsun font-normal",
  txtBricolageGrotesqueSemiBold48: "font-bricolagegrotesque font-semibold",
  txtBricolageGrotesqueSemiBold36: "font-bricolagegrotesque font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
