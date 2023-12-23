import React from "react";

import { Text } from "components";

const FrameTwentyFiveRowandgetinspired = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-5xl text-9xl text-black-900 text-center w-auto"
          size="txtBricolageGrotesqueMedium128"
        >
          {props?.text}
        </Text>
        <div className="bg-gray-200 h-[86px] rounded-[43px] w-[14%]"></div>
        <Text
          className="md:text-5xl text-9xl text-black-900 text-center w-auto"
          size="txtBricolageGrotesqueMedium128"
        >
          {props?.text1}
        </Text>
      </div>
    </>
  );
};

FrameTwentyFiveRowandgetinspired.defaultProps = {
  text: "and get inspired",
  text1: "-",
};

export default FrameTwentyFiveRowandgetinspired;
