import React from "react";

import { Img, Text } from "components";

const FrameTwentySixMenu = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-12 w-12"
          src="images/img_component1.svg"
          alt="componentOne"
        />
        <div className="flex flex-col gap-[29px] items-start justify-start w-[603px] md:w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 shadow-bs1 w-full">
            <div className="flex flex-col items-end justify-between py-8 w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtLexendDecaMedium32Black900"
              >
                {props?.home}
              </Text>
            </div>
            <Text
              className="border border-black-900 border-solid pb-5 sm:pr-5 pr-[35px] pt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtLexendDecaMedium32Black900"
            >
              {props?.utsinpicturestext}
            </Text>
            <Text
              className="border border-black-900 border-solid sm:pr-5 pr-[35px] py-[22px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtLexendDecaMedium32Black900"
            >
              {props?.aboutustext}
            </Text>
            <div className="flex flex-col items-end justify-between py-8 w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                size="txtLexendDecaMedium32Black900"
              >
                {props?.partnersandsponOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-24 md:h-[120px] sm:h-[199px] relative w-full">
              <Img
                className="absolute bottom-[0] h-[120px] inset-x-[0] mx-auto"
                src="images/img_group3.svg"
                alt="subtract"
              />
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[120px] inset-x-[0] items-start justify-end mx-auto p-6 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group1.svg')" }}
              >
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mb-[13px] mt-4 w-[95%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtLexendDecaMedium32"
                  >
                    {props?.getyourticketfrOne}
                  </Text>
                  <Img
                    className="h-10 mb-0.5 w-10"
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrameTwentySixMenu.defaultProps = {
  home: "Home",
  utsinpicturestext: "UTS 23 in pictures",
  aboutustext: "About us",
  partnersandsponOne: "Partners and Sponsors",
  getyourticketfrOne: "Get your Ticket(Free)",
};

export default FrameTwentySixMenu;
