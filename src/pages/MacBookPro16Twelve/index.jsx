import React from "react";

import { Img, Text } from "components";

const MacBookPro16TwelvePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-bricolagegrotesque items-center justify-start mx-auto pb-[339px] w-full">
        <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1728px] md:px-10 sm:px-5 px-[100px] py-6 w-full">
          <Img
            className="h-16 w-[218px]"
            src="images/img_frame1.svg"
            alt="frameOne"
          />
          <Img className="h-12 w-12" src="images/img_menu.svg" alt="menu" />
        </div>
        <div className="flex flex-col justify-start mt-[190px] md:px-5 w-[30%] md:w-full">
          <Text
            className="md:text-5xl text-7xl text-black-900"
            size="txtBricolageGrotesqueSemiBold72"
          >
            Get your Ticket
          </Text>
          <div className="bg-purple-400 flex sm:flex-col flex-row gap-2 items-center justify-center md:ml-[0] ml-[113px] mr-[138px] mt-[3px] sm:px-5 px-6 py-4 w-auto">
            <Img
              className="h-10 w-10"
              src="images/img_coupon2line_purple_100_01.svg"
              alt="coupon2line"
            />
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
              size="txtBricolageGrotesqueMedium32"
            >
              Its free!
            </Text>
            <Img
              className="h-10 w-10"
              src="images/img_coupon2line_purple_100_01.svg"
              alt="coupon2line_One"
            />
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col font-lexenddeca h-[120px] items-center justify-start mt-[185px] md:px-5 w-[35%] md:w-full"
          style={{ backgroundImage: "url('images/img_group3.svg')" }}
        >
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[120px] items-start justify-start p-6 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group1.svg')" }}
          >
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mb-[13px] mt-4 w-[95%] md:w-full">
              <Text
                className="sm:mt-0 mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtLexendDecaMedium32"
              >
                Get your Ticket(Free)
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
    </>
  );
};

export default MacBookPro16TwelvePage;
