import React from "react";

import { Text } from "components";

const FrameTwentyFiveRowmeet = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-5xl text-9xl text-black-900 text-center w-auto"
          size="txtBricolageGrotesqueMedium128"
        >
          {props?.meettext}
        </Text>
        <div className="bg-gray-200 h-[86px] rotate-[-90deg] rounded-[50%] w-[86px]"></div>
        <Text
          className="md:text-5xl text-9xl text-black-900 text-center w-auto"
          size="txtBricolageGrotesqueMedium128"
        >
          {props?.languagetext}
        </Text>
      </div>
    </>
  );
};

FrameTwentyFiveRowmeet.defaultProps = { meettext: "Meet", languagetext: ", " };

export default FrameTwentyFiveRowmeet;
