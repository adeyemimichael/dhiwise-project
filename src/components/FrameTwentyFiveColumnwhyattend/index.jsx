import React from "react";

import { Img, Text } from "components";

const FrameTwentyFiveColumnwhyattend = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="mt-[13px] md:text-5xl text-[64px] text-black-900"
          size="txtBricolageGrotesqueSemiBold64"
        >
          {props?.whyattendtext}
        </Text>
        <Img
          className="h-[456px] ml-0.5 md:ml-[0] mt-[109px]"
          src="images/img_group9.svg"
          alt="groupNine"
        />
        <Text
          className="mb-[196px] md:ml-[0] ml-[62px] mt-[130px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
          size="txtBricolageGrotesqueSemiBold36"
        >
          {props?.insightfulsessiontext}
        </Text>
      </div>
    </>
  );
};

FrameTwentyFiveColumnwhyattend.defaultProps = {
  insightfulsessiontext: "Insightful session",
};

export default FrameTwentyFiveColumnwhyattend;
