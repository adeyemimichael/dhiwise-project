import React from "react";

import { Button, Img, Line, List, Text } from "components";
import FrameTwentyFiveColumnwhyattend from "components/FrameTwentyFiveColumnwhyattend";
import FrameTwentyFiveRowandgetinspired from "components/FrameTwentyFiveRowandgetinspired";
import FrameTwentyFiveRowmeet from "components/FrameTwentyFiveRowmeet";

const FrameTwentyFivePage = () => {
  return (
    <>
      <div className="flex flex-col font-bricolagegrotesque gap-[-1px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[115px] items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1728px] md:px-10 sm:px-5 px-[100px] py-6 w-full">
              <Img
                className="h-16 w-[218px]"
                src="images/img_frame1.svg"
                alt="frameOne"
              />
              <Img className="h-12 w-12" src="images/img_menu.svg" alt="menu" />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-start justify-start max-w-[1281px] mx-auto md:px-5 w-full">
              <Img
                className="h-0.5 md:mt-0 mt-56 w-px"
                src="images/img_vector.svg"
                alt="vector"
              />
              <div className="flex md:flex-1 flex-col gap-2 items-center justify-center w-auto md:w-full">
                <div className="sm:h-[197px] h-[315px] md:h-[461px] relative w-full">
                  <div className="absolute flex md:flex-col flex-row gap-2 inset-x-[0] items-center justify-center mx-auto top-[0] w-auto">
                    <FrameTwentyFiveRowmeet className="flex sm:flex-col flex-row gap-[18px] items-center justify-start sm:px-5 px-6 w-auto sm:w-full" />
                    <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start sm:px-5 px-6 w-auto md:w-full">
                      <Text
                        className="md:text-5xl text-9xl text-black-900 text-center w-auto"
                        size="txtBricolageGrotesqueMedium128"
                      >
                        connect
                      </Text>
                      <Img
                        className="h-[86px] w-[142px]"
                        src="images/img_union.svg"
                        alt="union"
                      />
                    </div>
                  </div>
                  <FrameTwentyFiveRowandgetinspired className="absolute bottom-[0] flex md:flex-col flex-row gap-2 inset-x-[0] items-center justify-center mx-auto sm:px-5 px-8 w-auto" />
                </div>
                <div className="flex md:flex-col flex-row gap-2 items-center justify-center w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-9xl text-black-900 text-center w-auto"
                      size="txtBricolageGrotesqueMedium128"
                    >
                      In one
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start sm:px-5 px-6 w-auto md:w-full">
                    <div className="bg-gray-200 h-[86px] w-[23%]"></div>
                    <Text
                      className="md:text-5xl text-9xl text-black-900 text-center w-auto"
                      size="txtBricolageGrotesqueMedium128"
                    >
                      location.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-lexenddeca h-[300px] md:h-[407px] md:px-5 relative w-full">
              <div className="bg-green-A700 flex md:flex-col flex-row gap-[51px] h-full items-start justify-between m-auto p-6 sm:px-5 rotate-[5deg] w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Img
                    className="h-[43px] md:h-auto object-cover w-[26px]"
                    src="images/img_coupon2line.png"
                    alt="coupon2line"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-[47px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[95%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Get the ticket
                    </Text>
                    <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_coupon2line_teal_800.svg"
                      alt="coupon2line"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Get the ticket
                    </Text>
                    <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_coupon2line_teal_800.svg"
                      alt="coupon2line"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Get the ticket
                    </Text>
                    <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_coupon2line_teal_800.svg"
                      alt="coupon2line"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Get the ticket
                    </Text>
                    <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_coupon2line_teal_800.svg"
                      alt="coupon2line"
                    />
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Get the ticket
                    </Text>
                    <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_coupon2line_teal_800.svg"
                      alt="coupon2line"
                    />
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                    size="txtLexendDecaMedium32"
                  >
                    Get the ticket
                  </Text>
                </div>
              </div>
              <div className="absolute bg-blue_gray-900 flex flex-row h-max inset-[0] items-center justify-evenly m-auto p-6 sm:px-5 rotate-[-3deg] shadow-bs1 w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Anticipate
                    </Text>
                    <div className="bg-light_blue-A400 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      2024
                    </Text>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:mt-0 my-4 w-[70%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        Anticipate
                      </Text>
                      <div className="bg-light_blue-A400 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        2024
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        Anticipate
                      </Text>
                      <div className="bg-light_blue-A400 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        2024
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        Anticipate
                      </Text>
                      <div className="bg-light_blue-A400 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        2024
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        Anticipate
                      </Text>
                      <div className="bg-light_blue-A400 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        2024
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-row gap-2 items-center justify-start md:mt-0 mt-[81px] w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Anticipate
                    </Text>
                    <div className="bg-light_blue-A400 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      2024
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[82px] items-center justify-end pt-[126px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-start max-w-[1466px] mx-auto md:px-5 w-full">
              <Text
                className="leading-[101.00px] md:text-5xl text-7xl text-black-900"
                size="txtBricolageGrotesqueSemiBold72"
              >
                <>
                  What is Unilorin <br />
                  Tech Summit?
                </>
              </Text>
              <div className="flex md:flex-1 flex-col gap-[46px] items-start justify-start md:mt-0 mt-4 w-auto md:w-full">
                <Text
                  className="leading-[36.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtLexendDecaMedium24"
                >
                  <>
                    Welcome to the Unilorin Tech Summit, a prestigious annual
                    tech extravaganza hosted right within the vibrant heart of
                    Nigeria&#39;s Unilorin University, home to an astounding
                    40,000+ students.
                    <br />
                    <br />
                    Picture this: Founders, Business Leaders, Tech Enthusiasts,
                    and Entrepreneurs all converging for a tech fiesta where we
                    unlock the secrets to thriving in the ever-evolving Tech
                    Ecosystem. <br />
                    <br />
                    We&#39;re here to equip you with the skills to ride the tech
                    wave and make a global impact – all while having a blast!
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-bricolagegrotesque font-medium min-w-[207px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                  color="black_900"
                  size="md"
                >
                  Read more
                </Button>
              </div>
            </div>
            <Img className="h-[407px]" src="images/img_frame.svg" alt="frame" />
          </div>
          <div className="bg-light_blue-A400 flex flex-col font-newsun md:gap-10 gap-32 items-center justify-end p-[57px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col max-w-[1474px] mt-[146px] mx-auto relative w-full">
              <div className="h-[599px] md:h-[980px] mx-auto w-full">
                <Img
                  className="absolute h-[599px] inset-[0] justify-center m-auto"
                  src="images/img_group.svg"
                  alt="group"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[222px] inset-x-[0] items-center justify-between mx-auto top-[22%] w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="md:text-5xl text-[200px] text-white-A700 w-auto"
                      size="txtBricolageGrotesqueMedium200"
                    >
                      4
                    </Text>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                      size="txtLexendDecaSemiBold48"
                    >
                      Speakers
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-[200px] text-white-A700 w-auto"
                      size="txtBricolageGrotesqueMedium200"
                    >
                      2000+
                    </Text>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                      size="txtLexendDecaSemiBold48"
                    >
                      Young minds
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="md:text-5xl text-[200px] text-white-A700 w-auto"
                      size="txtBricolageGrotesqueMedium200"
                    >
                      8
                    </Text>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                      size="txtLexendDecaSemiBold48"
                    >
                      Panelists
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start justify-center ml-auto mr-[456px] mt-[-43.54px] w-[21%] z-[1]">
                <Img
                  className="h-[54px]"
                  src="images/img_vector1.svg"
                  alt="vectorOne"
                />
                <Text
                  className="leading-[118.70%] mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-teal-900"
                  size="txtNewSunYandiDesigns32"
                >
                  <>
                    From Nigeria <br />
                    and Beyond!
                  </>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[34px] items-end justify-start w-auto md:w-full">
              <Img
                className="h-[43px] w-[201px]"
                src="images/img_frame1.svg"
                alt="frameThirtyThree"
              />
              <Line className="bg-light_blue-100 h-[50px] md:h-px md:w-full w-px" />
              <div className="flex sm:flex-col flex-row gap-8 items-end justify-start w-auto sm:w-full">
                <Text
                  className="leading-[118.70%] text-sm text-white-A700"
                  size="txtLexendDecaMedium14"
                >
                  <>
                    You know, we have a very wide
                    <br />
                    Auditorium to contain even more people
                    <br />
                    So we got you covered!
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[211px]"
                  rightIcon={
                    <Img
                      className="h-6 mb-0.5 ml-2"
                      src="images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                  color="light_blue_50"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-bricolagegrotesque font-medium text-left text-xl">
                    Get your Ticket
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[100px] w-full">
          <div className="h-[1117px] md:h-[3248px] max-w-[1528px] mx-auto relative w-full">
            <div className="flex flex-col font-bricolagegrotesque h-full items-center justify-start m-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[114px] items-center justify-center p-3.5 w-[34%] md:w-full">
                  <Img
                    className="h-[444px] mt-[258px]"
                    src="images/img_group7.svg"
                    alt="groupSeven"
                  />
                  <Text
                    className="mb-[226px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                    size="txtBricolageGrotesqueSemiBold36"
                  >
                    Networking
                  </Text>
                </div>
                <FrameTwentyFiveColumnwhyattend className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-11 md:px-10 sm:px-5 w-[34%] md:w-full" />
                <div className="bg-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[100px] items-center justify-center p-[33px] sm:px-5 w-[34%] md:w-full">
                  <Img
                    className="h-[456px] mt-[211px]"
                    src="images/img_group4.svg"
                    alt="groupFour"
                  />
                  <Text
                    className="leading-[52.00px] mb-[178px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                    size="txtBricolageGrotesqueSemiBold36"
                  >
                    <>
                      Fun and Social <br />
                      Interaction
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="absolute inset-x-[0] leading-[30.00px] mx-auto text-black-900 text-center text-xl top-[0]"
              size="txtLexendDecaMedium20"
            >
              <>
                Well, without you there is no UTS, we need you to make it
                <br />
                colourful, seriously!
              </>
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-[97px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[121px] justify-start mb-[69px] mt-[23px] w-[96%] md:w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[407px]">
              <Text
                className="md:text-5xl text-7xl text-black-900"
                size="txtBricolageGrotesqueSemiBold72"
              >
                Highlight of UTS 2022
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-lexenddeca md:gap-5 items-center justify-start w-full">
              <div className="bg-yellow-A700 h-[622px] w-[30%]"></div>
              <div className="h-[622px] md:ml-[0] ml-[42px] relative w-[63%] md:w-full">
                <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[0] top-[30%] w-[58%]">
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
                <div className="absolute bg-yellow-A700 h-[622px] inset-y-[0] left-[0] my-auto w-[48%]"></div>
                <div className="absolute bg-yellow-A700 h-[622px] inset-y-[0] my-auto right-[0] w-[48%]"></div>
              </div>
              <Button
                className="flex h-14 items-center justify-center md:ml-[0] ml-[21px] md:mt-0 my-[283px] w-14"
                shape="circle"
                color="white_A700"
                size="sm"
              >
                <Img
                  className="h-8"
                  src="images/img_arrowright_black_900.svg"
                  alt="arrowright_One"
                />
              </Button>
            </div>
          </div>
        </div>
        <List
          className="flex flex-col items-center w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[63px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start max-w-[1529px] mb-[109px] mx-auto w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
                size="txtBricolageGrotesqueSemiBold48"
              >
                Meet our Partners
              </Text>
              <div className="flex md:flex-col flex-row font-lexenddeca md:gap-10 items-center justify-between w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-blue-300 outline-dashed p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-light_blue-900"
                    size="txtLexendDecaMedium16"
                  >
                    Claim this space
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-blue-300 outline-dashed p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-light_blue-900"
                    size="txtLexendDecaMedium16"
                  >
                    Claim this space
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-blue-300 outline-dashed p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-light_blue-900"
                    size="txtLexendDecaMedium16"
                  >
                    Claim this space
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-blue-300 outline-dashed p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-light_blue-900"
                    size="txtLexendDecaMedium16"
                  >
                    Claim this space
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-A700 flex flex-1 flex-col items-center justify-start p-[66px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[86px] items-center justify-start max-w-[1529px] mb-[106px] mx-auto w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtBricolageGrotesqueSemiBold48WhiteA700"
              >
                Meet our Sponsors
              </Text>
              <div className="flex md:flex-col flex-row font-lexenddeca md:gap-10 items-center justify-between w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-dashed outline-green-200 p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-teal-800"
                    size="txtLexendDecaMedium16Teal800"
                  >
                    Claim this space
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-dashed outline-green-200 p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-teal-800"
                    size="txtLexendDecaMedium16Teal800"
                  >
                    Claim this space
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-dashed outline-green-200 p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-teal-800"
                    size="txtLexendDecaMedium16Teal800"
                  >
                    Claim this space
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end outline-[2px] outline-dashed outline-green-200 p-[72px] md:px-10 sm:px-5">
                  <Text
                    className="mt-0.5 text-base text-center text-teal-800"
                    size="txtLexendDecaMedium16Teal800"
                  >
                    Claim this space
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
        <div className="bg-blue_gray-900 flex flex-col font-lexenddeca items-center justify-end pt-[81px] w-full">
          <div className="flex flex-col gap-[25px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1528px] mx-auto md:px-5 w-full">
              <Text
                className="mb-1 sm:mt-0 mt-[7px] text-base text-purple-100"
                size="txtLexendDecaSemiBold16"
              >
                Powered by Unilorin Christian Union
              </Text>
              <div className="flex flex-row gap-[22px] h-8 md:h-auto items-start justify-start w-[194px]">
                <Img
                  className="h-8 w-8"
                  src="images/img_linkedinlogo.svg"
                  alt="linkedinlogo"
                />
                <Img
                  className="h-8 w-8"
                  src="images/img_instagramlogo.svg"
                  alt="instagramlogo"
                />
                <Img
                  className="h-8 w-8"
                  src="images/img_twitterlogo.svg"
                  alt="twitterlogo"
                />
                <Img
                  className="h-8 w-8"
                  src="images/img_envelopesimple.svg"
                  alt="envelopesimple"
                />
              </div>
            </div>
            <Img
              className="h-[411px]"
              src="images/img_frame_pink_a400.svg"
              alt="frame_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwentyFivePage;
