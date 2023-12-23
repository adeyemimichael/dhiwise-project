import React from "react";

import { Button, Img, Line, List, Text } from "components";
import FrameTwentyFiveColumnwhyattend from "components/FrameTwentyFiveColumnwhyattend";
import FrameTwentySixMenu from "components/FrameTwentySixMenu";

const FrameTwentySixPage = () => {
  return (
    <>
      <div className="flex flex-col font-lexenddeca gap-[-1px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[182px] items-center justify-start w-full">
          <div className="flex flex-col md:px-5 px-[100px] py-6 relative w-[1728px] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-between max-w-[1728px] mx-auto md:px-10 sm:px-5 px-[100px] py-6 w-full">
              <Img
                className="h-16 w-[218px]"
                src="images/img_frame1.svg"
                alt="frameOne"
              />
            </div>
            <FrameTwentySixMenu className="flex flex-col gap-[37px] items-end justify-start ml-auto mt-[-80px] w-[603px] z-[1]" />
          </div>
          <div className="sm:h-[299px] h-[300px] md:h-[573px] p-6 md:px-5 relative rotate-[5deg] w-[1728px] md:w-full">
            <div className="absolute sm:h-[299px] h-[300px] md:h-[573px] inset-[0] justify-center m-auto w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-14 md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/defaultNoData.png')" }}
              >
                <div className="flex md:flex-col flex-row gap-[47px] items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start md:mt-0 mt-[122px] w-auto">
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
                  <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between mb-[30px] w-4/5 md:w-full">
                    <div className="md:mt-0 mt-[91px] overflow-x-auto w-[23%]">
                      <div className="flex sm:flex-col flex-row gap-2 items-center justify-start overflow-auto w-auto">
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
                          alt="coupon2line_One"
                        />
                        <div className="bg-yellow-A700 h-1.5 rounded-[50%] w-1.5"></div>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                          size="txtLexendDecaMedium32"
                        >
                          3rd Feb 2024
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[47px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mb-[30px] w-3/4 md:w-full"
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
                    </List>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[9%] flex flex-col items-center justify-start left-[0] w-auto">
                <Img
                  className="h-[43px] md:h-auto object-cover w-[26px]"
                  src="images/img_coupon2line.png"
                  alt="coupon2line_Two"
                />
              </div>
            </div>
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[9%] w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                size="txtLexendDecaMedium32"
              >
                Get the ticket
              </Text>
            </div>
            <div className="absolute sm:h-[204px] h-[205px] md:h-[420px] inset-x-[0] mx-auto p-6 sm:px-5 rotate-[-3deg] top-[5%] w-[1728px] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-end m-auto p-[47px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/defaultNoData.png')" }}
              >
                <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start w-[97%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[49px] items-start justify-between mb-[26px] w-[65%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-center justify-start mb-[22px] w-auto sm:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        Venue
                      </Text>
                      <div className="bg-pink-A400 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        Unilorin main auditorium
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-2 items-center justify-start md:mt-0 mt-[26px] w-auto sm:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        Save the date
                      </Text>
                      <div className="bg-yellow-A700 h-1.5 rounded-[50%] w-1.5"></div>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                        size="txtLexendDecaMedium32"
                      >
                        3rd Feb 2024
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start md:mt-0 mt-12 w-auto sm:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Venue
                    </Text>
                    <div className="bg-green-A700 h-1.5 rounded-[50%] w-1.5"></div>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                      size="txtLexendDecaMedium32"
                    >
                      Unilorin main auditorium
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[12%] w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtLexendDecaMedium32"
                >
                  3rd Feb 2024
                </Text>
              </div>
              <div className="absolute bottom-[12%] flex flex-col items-center justify-start right-[0] w-auto">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                  size="txtLexendDecaMedium32"
                >
                  Save the date
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-bricolagegrotesque items-start justify-start w-auto md:w-full">
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[66px] items-center justify-end pt-[126px] w-full">
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
              <div className="flex md:flex-1 flex-col gap-[46px] items-start justify-start md:mt-0 mt-8 w-auto md:w-full">
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
        <div className="bg-white-A700 flex flex-col font-bricolagegrotesque md:gap-10 gap-[185px] items-center justify-start p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col justify-start w-[35%] md:w-full">
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
                alt="coupon2line_Three"
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
                alt="coupon2line_Four"
              />
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col font-lexenddeca h-[120px] items-center justify-start mb-[400px] md:px-5 w-[41%] md:w-full"
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
                  alt="arrowright_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-bricolagegrotesque items-start justify-start p-24 md:px-10 sm:px-5 w-full">
          <Text
            className="mb-[837px] md:ml-[0] ml-[3px] md:text-5xl text-7xl text-black-900"
            size="txtBricolageGrotesqueSemiBold72"
          >
            Agenda
          </Text>
        </div>
        <div className="bg-green-A700 flex flex-col font-bricolagegrotesque items-center justify-start p-[66px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1529px] mb-[29px] mx-auto w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
              size="txtBricolageGrotesqueSemiBold48WhiteA700"
            >
              Meet our Sponsors
            </Text>
            <List
              className="sm:flex-col flex-row gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[34px] items-center justify-start w-auto">
                <div className="bg-green-A200 flex flex-col gap-[38px] items-center justify-start pb-[53px] md:pl-10 sm:pl-5 pl-[53px] w-full">
                  <Button className="cursor-pointer font-lexenddeca font-medium min-w-[154px] text-base text-center">
                    Claim this space
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800"
                    size="txtBricolageGrotesqueSemiBold32"
                  >
                    Company logo
                  </Text>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800 w-auto"
                  size="txtBricolageGrotesqueSemiBold32"
                >
                  Your company name
                </Text>
              </div>
              <div className="flex flex-col gap-[34px] items-center justify-start w-auto">
                <div className="bg-green-A200 flex flex-col gap-[38px] items-center justify-start pb-[53px] md:pl-10 sm:pl-5 pl-[53px] w-full">
                  <Button className="cursor-pointer font-lexenddeca font-medium min-w-[154px] text-base text-center">
                    Claim this space
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800"
                    size="txtBricolageGrotesqueSemiBold32"
                  >
                    Company logo
                  </Text>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800 w-auto"
                  size="txtBricolageGrotesqueSemiBold32"
                >
                  Your company name
                </Text>
              </div>
              <div className="flex flex-col gap-[34px] items-center justify-start w-auto">
                <div className="bg-green-A200 flex flex-col gap-[38px] items-center justify-start pb-[53px] md:pl-10 sm:pl-5 pl-[53px] w-full">
                  <Button className="cursor-pointer font-lexenddeca font-medium min-w-[154px] text-base text-center">
                    Claim this space
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800"
                    size="txtBricolageGrotesqueSemiBold32"
                  >
                    Company logo
                  </Text>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800 w-auto"
                  size="txtBricolageGrotesqueSemiBold32"
                >
                  Your company name
                </Text>
              </div>
              <div className="flex flex-col gap-[34px] items-center justify-start w-auto">
                <div className="bg-green-A200 flex flex-col gap-[38px] items-center justify-start pb-[53px] md:pl-10 sm:pl-5 pl-[53px] w-full">
                  <Button className="cursor-pointer font-lexenddeca font-medium min-w-[154px] text-base text-center">
                    Claim this space
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800"
                    size="txtBricolageGrotesqueSemiBold32"
                  >
                    Company logo
                  </Text>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-teal-800 w-auto"
                  size="txtBricolageGrotesqueSemiBold32"
                >
                  Your company name
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-blue_gray-900 flex flex-col items-center justify-end pt-[139px] w-full">
          <Img
            className="h-[411px]"
            src="images/img_frame_pink_a400.svg"
            alt="frame_One"
          />
        </div>
      </div>
    </>
  );
};

export default FrameTwentySixPage;
