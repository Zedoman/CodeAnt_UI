import React, { useState } from "react";

const Repository = () => {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  // Add click handler
  const handleSearchClick = () => {
    setShowSearchOverlay(true);
  };

  // Add close handler
  const handleCloseOverlay = () => {
    setShowSearchOverlay(false);
  };
  return (
    <>
      <div
        data-layer="Laptop"
        className="Laptop hidden md:inline-flex w-full h-[960px] bg-white justify-start items-center overflow-hidden"
      >
        <div
          data-layer="Sidebar navigation"
          className="SidebarNavigation w-[242px] h-[960px] bg-white border-r border-gray-200 justify-start items-start flex"
        >
          <div
            data-layer="Content"
            className="Content grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex"
          >
            <div
              data-layer="Navigation"
              className="Navigation self-stretch h-[356px] pt-6 flex-col justify-start items-start gap-4 flex"
            >
              <div
                data-layer="Header"
                className="Header self-stretch h-[92px] px-5 flex-col justify-start items-start gap-5 flex"
              >
                <div
                  data-layer="Frame 9"
                  className="Frame9 justify-start items-center gap-[11px] inline-flex"
                >
                  <img src="lg.png" alt="CodeAnt AI logo" className="w-8 h-8" />
                  <div
                    data-layer="CodeAnt AI"
                    className="CodeantAi text-gray-900 text-2xl font-normal font-['Satoshi'] leading-relaxed"
                  >
                    CodeAnt AI
                  </div>
                </div>
                <div
                  data-layer="Input dropdown"
                  className="InputDropdown self-stretch h-10 flex-col justify-start items-start gap-2 flex"
                >
                  <div
                    data-layer="Input with label"
                    className="InputWithLabel self-stretch h-10 flex-col justify-start items-start gap-1.5 flex"
                  >
                    <div
                      data-layer="Input field"
                      className="InputField self-stretch h-10 flex-col justify-start items-start gap-1.5 flex"
                    >
                      <div
                        data-layer="Input with label"
                        className="InputWithLabel self-stretch h-10 flex-col justify-start items-start gap-1.5 flex"
                      >
                        <div
                          data-layer="Input"
                          className="Input self-stretch px-3 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-zinc-300 justify-start items-center gap-2 inline-flex"
                        >
                          <div
                            data-layer="Content"
                            className="Content grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                          >
                            <div
                              data-layer="Text"
                              className="Text grow shrink basis-0 text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                            >
                              UtkarshDhairyaPanwar
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Navigation"
                className="Navigation self-stretch h-56 px-4 flex-col justify-start items-start flex"
              >
                <div
                  data-layer="_Nav item base"
                  className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Content"
                    className="Content grow shrink basis-0 h-11 px-3.5 py-2.5 bg-blue-600 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border-2 border-white justify-center items-center gap-1 flex"
                  >
                    <div
                      data-layer="Text and icon"
                      className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                    >
                      <div
                        data-layer="Frame 10"
                        className="Frame10 w-6 pr-[3.76px] py-[3.01px] justify-center items-center flex"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-white text-base font-semibold font-['Inter'] leading-normal"
                      >
                        Repositories
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="_Nav item base"
                  className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Content"
                    className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                  >
                    <div
                      data-layer="Text and icon"
                      className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                    >
                      <div
                        data-layer="Frame 10"
                        className="Frame10 w-6 h-6 pr-[1.50px] pt-[3px] pb-[3.03px] justify-center items-center flex"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                      >
                        AI Code Review
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="_Nav item base"
                  className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Content"
                    className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                  >
                    <div
                      data-layer="Text and icon"
                      className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                    >
                      <div
                        data-layer="Frame 10"
                        className="Frame10 w-6 h-6 pr-[1.50px] py-[4.12px] justify-center items-center flex"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                      >
                        Cloud Security
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="_Nav item base"
                  className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Content"
                    className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                  >
                    <div
                      data-layer="Text and icon"
                      className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                    >
                      <div
                        data-layer="Frame 10"
                        className="Frame10 w-6 pr-[8.25px] py-[3px] justify-start items-center flex"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                      >
                        How to Use
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="_Nav item base"
                  className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Content"
                    className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                  >
                    <div
                      data-layer="Text and icon"
                      className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                    >
                      <div
                        data-layer="Frame 10"
                        className="Frame10 w-6 pr-[6.65px] py-[3px] justify-start items-center flex"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                      >
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-layer="Footer"
              className="Footer self-stretch h-28 px-4 pb-6 flex-col justify-start items-start gap-4 flex"
            >
              <div
                data-layer="Navigation"
                className="Navigation self-stretch h-[88px] flex-col justify-start items-start flex"
              >
                <div
                  data-layer="_Nav item base"
                  className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Content"
                    className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                  >
                    <div
                      data-layer="Text and icon"
                      className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                    >
                      <div
                        data-layer="Frame 10"
                        className="Frame10 w-6 pr-1.5 py-[3.01px] justify-start items-center flex"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                      >
                        Support
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="_Nav item base"
                  className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Content"
                    className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                  >
                    <div
                      data-layer="Text and icon"
                      className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                    >
                      <div
                        data-layer="Frame 10"
                        className="Frame10 w-6 pr-1.5 py-[4.12px] justify-start items-center flex"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                      >
                        Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 989"
          className="Frame989 grow shrink basis-0 h-[960px] p-6 bg-neutral-50 flex-col justify-start items-start gap-2 inline-flex"
        >
          <div
            data-layer="Calendar"
            className="Calendar self-stretch grow shrink basis-0 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-gray-200 flex-col justify-start items-start flex overflow-hidden"
          >
            <div
              data-layer="Header"
              className="Header self-stretch h-[156px] bg-white border-b border-gray-200 flex-col justify-start items-start gap-5 flex"
            >
              <div
                data-layer="Content"
                className="Content self-stretch h-[156px] px-6 py-5 flex-col justify-start items-start gap-4 flex"
              >
                <div
                  data-layer="Frame 990"
                  className="Frame990 self-stretch justify-between items-center inline-flex"
                >
                  <div
                    data-layer="Date and text"
                    className="DateAndText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex"
                  >
                    <div
                      data-layer="Text"
                      className="Text text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose"
                    >
                      Repositories
                    </div>
                    <div
                      data-layer="Text"
                      className="Text text-gray-700 text-sm font-normal font-['Inter'] leading-tight"
                    >
                      33 total repositories
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1014"
                    className="Frame1014 justify-start items-center gap-3 flex"
                  >
                    <div
                      data-layer="Button"
                      className="Button h-10 px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border border-zinc-300 justify-center items-center gap-1 inline-flex overflow-hidden"
                    >
                      <div
                        data-layer="Frame 1015"
                        className="Frame1015 w-5 pl-[0.53px] pr-[2.56px] pt-[1.81px] pb-[1.31px] justify-center items-center flex"
                      />
                      <div
                        data-layer="Text padding"
                        className="TextPadding px-0.5 justify-center items-center flex"
                      >
                        <img
                          src="re.png"
                          alt="CodeAnt AI logo"
                          className="w-4 h-4 mr-2"
                        />
                        <div
                          data-layer="Text"
                          className="Text text-gray-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Refresh All
                        </div>
                      </div>
                    </div>

                    <div
                      data-layer="Button"
                      className="Button px-3.5 py-2.5 bg-blue-600 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border-2 border-white justify-center items-center gap-1 flex overflow-hidden"
                    >
                      <div
                        data-layer="Frame 1015"
                        className="Frame1015 w-5 pl-[0.56px] pr-[4.81px] pt-[2.97px] pb-[2.40px] justify-start items-center flex"
                      />
                      <div
                        data-layer="Text padding"
                        className="TextPadding px-0.5 justify-center items-center flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-white text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Add Repository
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Buttons/Button"
                  className="ButtonsButton w-[366px] px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border border-zinc-300 justify-start items-center gap-1 inline-flex overflow-hidden"
                >
                  <div
                    data-layer="Frame 10"
                    className="Frame10 w-6 pr-1.5 pt-[3.25px] pb-[2.75px] justify-start items-center flex"
                  />
                  <div
                    data-layer="Text padding"
                    className="TextPadding px-0.5 justify-center items-center flex"
                  >
                    <div
                      data-layer="Text"
                      className="Text text-gray-700 text-base font-normal font-['Inter'] leading-tight"
                    >
                      Search Repositories
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-layer="Main"
              className="Main self-stretch grow shrink basis-0 justify-start items-start inline-flex"
            >
              <div
                data-layer="Frame 1018"
                className="Frame1018 grow shrink basis-0 flex-col justify-center items-start inline-flex"
              >
                <div
                  data-layer="Frame 1018"
                  className="Frame1018 self-stretch h-[108px] py-6 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                >
                  <div
                    data-layer="Frame 1019"
                    className="Frame1019 px-6 flex-col justify-start items-start gap-3 flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 inline-flex"
                    >
                      <div
                        data-layer="design-system"
                        className="DesignSystem text-gray-900 text-xl font-medium font-['Inter'] leading-normal"
                      >
                        design-system
                      </div>
                      <div
                        data-layer="Badge"
                        className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Public
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Frame 1017"
                      className="Frame1017 justify-start items-start gap-10 inline-flex"
                    >
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="React"
                          className="React text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          React
                        </div>
                        <div
                          data-layer="Ellipse 1"
                          className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="7320 KB"
                          className="Kb text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          7320 KB
                        </div>
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Updated 1 day ago"
                          className="Updated1DayAgo text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Updated 1 day ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Frame 1016"
                  className="Frame1016 self-stretch h-[108px] py-6 bg-neutral-100 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                >
                  <div
                    data-layer="Frame 1019"
                    className="Frame1019 px-6 flex-col justify-start items-start gap-3 flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 inline-flex"
                    >
                      <div
                        data-layer="codeant-ci-app"
                        className="CodeantCiApp text-gray-900 text-xl font-medium font-['Inter'] leading-normal"
                      >
                        codeant-ci-app
                      </div>
                      <div
                        data-layer="Badge"
                        className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Private
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Frame 1017"
                      className="Frame1017 justify-start items-start gap-10 inline-flex"
                    >
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Javascript"
                          className="Javascript text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Javascript
                        </div>
                        <div
                          data-layer="Ellipse 1"
                          className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="5871 KB"
                          className="Kb text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          5871 KB
                        </div>
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Updated 2 days ago"
                          className="Updated2DaysAgo text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Updated 2 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 self-stretch h-[108px] py-6 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                >
                  <div
                    data-layer="Frame 1019"
                    className="Frame1019 px-6 flex-col justify-start items-start gap-3 flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 inline-flex"
                    >
                      <div
                        data-layer="analytics-dashboard"
                        className="AnalyticsDashboard text-gray-900 text-xl font-medium font-['Inter'] leading-normal"
                      >
                        analytics-dashboard
                      </div>
                      <div
                        data-layer="Badge"
                        className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Private
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Frame 1017"
                      className="Frame1017 justify-start items-start gap-10 inline-flex"
                    >
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Python"
                          className="Python text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Python
                        </div>
                        <div
                          data-layer="Ellipse 1"
                          className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="4521 KB"
                          className="Kb text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          4521 KB
                        </div>
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Updated 5 days ago"
                          className="Updated5DaysAgo text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Updated 5 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Frame 1020"
                  className="Frame1020 self-stretch h-[108px] py-6 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                >
                  <div
                    data-layer="Frame 1019"
                    className="Frame1019 px-6 flex-col justify-start items-start gap-3 flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 inline-flex"
                    >
                      <div
                        data-layer="mobile-app"
                        className="MobileApp text-gray-900 text-xl font-medium font-['Inter'] leading-normal"
                      >
                        mobile-app
                      </div>
                      <div
                        data-layer="Badge"
                        className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Public
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Frame 1017"
                      className="Frame1017 justify-start items-start gap-10 inline-flex"
                    >
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Swift"
                          className="Swift text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Swift
                        </div>
                        <div
                          data-layer="Ellipse 1"
                          className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="3096 KB"
                          className="Kb text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          3096 KB
                        </div>
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Updated 3 days ago"
                          className="Updated3DaysAgo text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Updated 3 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Frame 1021"
                  className="Frame1021 self-stretch h-[108px] py-6 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                >
                  <div
                    data-layer="Frame 1019"
                    className="Frame1019 px-6 flex-col justify-start items-start gap-3 flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 inline-flex"
                    >
                      <div
                        data-layer="e-commerce-platform"
                        className="ECommercePlatform text-gray-900 text-xl font-medium font-['Inter'] leading-normal"
                      >
                        e-commerce-platform
                      </div>
                      <div
                        data-layer="Badge"
                        className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Private
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Frame 1017"
                      className="Frame1017 justify-start items-start gap-10 inline-flex"
                    >
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Java"
                          className="Java text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Java
                        </div>
                        <div
                          data-layer="Ellipse 1"
                          className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="6210 KB"
                          className="Kb text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          6210 KB
                        </div>
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Updated 6 days ago"
                          className="Updated6DaysAgo text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Updated 6 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Frame 1022"
                  className="Frame1022 self-stretch h-[108px] py-6 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                >
                  <div
                    data-layer="Frame 1019"
                    className="Frame1019 px-6 flex-col justify-start items-start gap-3 flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 inline-flex"
                    >
                      <div
                        data-layer="blog-website"
                        className="BlogWebsite text-gray-900 text-xl font-medium font-['Inter'] leading-normal"
                      >
                        blog-website
                      </div>
                      <div
                        data-layer="Badge"
                        className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Public
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Frame 1017"
                      className="Frame1017 justify-start items-start gap-10 inline-flex"
                    >
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="HTML/CSS"
                          className="HtmlCss text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          HTML/CSS
                        </div>
                        <div
                          data-layer="Ellipse 1"
                          className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="1876 KB"
                          className="Kb text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          1876 KB
                        </div>
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Updated 4 days ago"
                          className="Updated4DaysAgo text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Updated 4 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Frame 1023"
                  className="Frame1023 self-stretch h-[108px] py-6 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                >
                  <div
                    data-layer="Frame 1019"
                    className="Frame1019 px-6 flex-col justify-start items-start gap-3 flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 inline-flex"
                    >
                      <div
                        data-layer="social-network"
                        className="SocialNetwork text-gray-900 text-xl font-medium font-['Inter'] leading-normal"
                      >
                        social-network
                      </div>
                      <div
                        data-layer="Badge"
                        className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                      >
                        <div
                          data-layer="Text"
                          className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                        >
                          Private
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Frame 1017"
                      className="Frame1017 justify-start items-start gap-10 inline-flex"
                    >
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="PHP"
                          className="Php text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          PHP
                        </div>
                        <div
                          data-layer="Ellipse 1"
                          className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="5432 KB"
                          className="Kb text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          5432 KB
                        </div>
                      </div>
                      <div
                        data-layer="Repo"
                        className="Repo justify-center items-center gap-2 flex"
                      >
                        <div
                          data-layer="Updated 7 days ago"
                          className="Updated7DaysAgo text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                        >
                          Updated 7 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-layer="Mobile"
        className="Mobile md:hidden w-[440px] h-[888px] bg-neutral-50 flex-col justify-start items-start inline-flex overflow-hidden"
      >
        <div
          data-layer="Frame 1025"
          className="Frame1025 self-stretch p-4 bg-white border-b border-gray-200 justify-between items-center inline-flex"
        >
          <div
            data-layer="Frame 9"
            className="Frame9 h-8 justify-start items-center gap-[11px] flex"
          >
            <img src="lg.png" alt="CodeAnt AI logo" className="w-8 h-8" />
            <div
              data-layer="CodeAnt AI"
              className="CodeantAi text-gray-900 text-2xl font-normal font-['Satoshi'] leading-relaxed"
            >
              CodeAnt AI
            </div>
          </div>
          <div
            data-layer="Frame 1024"
            className="Frame1024 w-6 h-6 pl-0.5 pr-px pt-[3px] pb-[3.75px] justify-center items-center flex"
          />
        </div>
        <div
          data-layer="Calendar"
          className="Calendar self-stretch h-[824px] bg-white flex-col justify-start items-start flex overflow-hidden"
        >
          <div
            data-layer="Header"
            className="Header self-stretch h-52 bg-white border-b border-gray-200 flex-col justify-start items-start gap-4 flex"
          >
            <div
              data-layer="Content"
              className="Content self-stretch h-52 px-4 py-5 flex-col justify-start items-start gap-4 flex"
            >
              <div
                data-layer="Frame 990"
                className="Frame990 self-stretch h-[108px] flex-col justify-start items-start gap-3 flex"
              >
                <div
                  data-layer="Date and text"
                  className="DateAndText self-stretch h-14 flex-col justify-start items-start gap-1 flex"
                >
                  <div
                    data-layer="Text"
                    className="Text text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose"
                  >
                    Repositories
                  </div>
                  <div
                    data-layer="Text"
                    className="Text text-gray-700 text-sm font-normal font-['Inter'] leading-tight"
                  >
                    33 total repositories
                  </div>
                </div>
                <div
                  data-layer="Frame 1014"
                  className="Frame1014 justify-start items-center gap-3 inline-flex"
                >
                  <div
                    data-layer="Button"
                    className="Button px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border border-zinc-300 justify-center items-center gap-1 flex overflow-hidden"
                  >
                    <div
                      data-layer="Frame 1015"
                      className="Frame1015 w-5 pl-[0.53px] pr-[2.56px] pt-[1.81px] pb-[1.31px] justify-center items-center flex"
                    />
                    <div
                      data-layer="Text padding"
                      className="TextPadding px-0.5 justify-center items-center flex"
                    >
                      <img
                        src="re.png"
                        alt="CodeAnt AI logo"
                        className="w-4 h-4 mr-2"
                      />
                      <div
                        data-layer="Text"
                        className="Text text-gray-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Refresh All
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Button"
                    className="Button px-3.5 py-2.5 bg-blue-600 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border-2 border-white justify-center items-center gap-1 flex overflow-hidden"
                  >
                    <div
                      data-layer="Frame 1015"
                      className="Frame1015 w-5 pl-[0.56px] pr-[4.81px] pt-[2.97px] pb-[2.40px] justify-start items-center flex"
                    />
                    <div
                      data-layer="Text padding"
                      className="TextPadding px-0.5 justify-center items-center flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-white text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Add Repository
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Buttons/Button"
                onClick={handleSearchClick}
                className="ButtonsButton self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border border-zinc-300 justify-start items-center gap-1 inline-flex overflow-hidden cursor-pointer"
              >
                <div
                  data-layer="Frame 10"
                  className="Frame10 w-6 pr-1.5 pt-[3.25px] pb-[2.75px] justify-start items-center flex"
                />
                <div
                  data-layer="Text padding"
                  className="TextPadding px-0.5 justify-center items-center flex"
                >
                  <div
                    data-layer="Text"
                    className="Text text-gray-700 text-base font-normal font-['Inter'] leading-tight"
                  >
                    Search Repositories
                  </div>
                </div>
              </div>
              {showSearchOverlay && (
                <div className="fixed inset-0 z-50">
                  <div
                    data-layer="Mobile"
                    className="Mobile w-[440px] h-[888px] bg-neutral-50 flex-col justify-start items-start inline-flex overflow-hidden"
                  >
                    <div
                      data-layer="Rectangle 1"
                      onClick={handleCloseOverlay}
                      className="Rectangle1 w-[440px] h-[888px] bg-neutral-500/30 absolute"
                    />
                    <div
                      data-layer="Frame 1025"
                      className="Frame1025 self-stretch h-[456px] p-4 bg-white border-b border-gray-200 flex-col justify-start items-start gap-6 flex"
                    >
                      <div
                        data-layer="Frame 1026"
                        className="Frame1026 w-[408px] justify-between items-center inline-flex"
                      >
                        <div
                          data-layer="Frame 9"
                          className="Frame9 h-8 justify-start items-center gap-[11px] flex"
                        >
                          <img
                            src="lg.png"
                            alt="CodeAnt AI logo"
                            className="w-8 h-8"
                          />
                          <div
                            data-layer="CodeAnt AI"
                            className="CodeantAi text-gray-900 text-2xl font-normal font-['Satoshi'] leading-relaxed"
                          >
                            CodeAnt AI
                          </div>
                        </div>
                        <div
                          onClick={handleCloseOverlay}
                          data-layer="Frame 1024"
                          className="Frame1024 w-6 h-6 pl-[5px] pr-1 pt-1 pb-[4.95px] justify-center items-center flex"
                        />
                      </div>
                      <div
                        data-layer="Frame 1027"
                        className="Frame1027 self-stretch h-[360px] flex-col justify-start items-start gap-3 flex"
                      >
                        <div
                          data-layer="Input dropdown"
                          className="InputDropdown self-stretch h-10 flex-col justify-start items-start gap-2 flex"
                        >
                          <div
                            data-layer="Input with label"
                            className="InputWithLabel self-stretch h-10 flex-col justify-start items-start gap-1.5 flex"
                          >
                            <div
                              data-layer="Input field"
                              className="InputField self-stretch h-10 flex-col justify-start items-start gap-1.5 flex"
                            >
                              <div
                                data-layer="Input with label"
                                className="InputWithLabel self-stretch h-10 flex-col justify-start items-start gap-1.5 flex"
                              >
                                <div
                                  data-layer="Input"
                                  className="Input self-stretch px-3 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-zinc-300 justify-start items-center gap-2 inline-flex"
                                >
                                  <div
                                    data-layer="Content"
                                    className="Content grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                                  >
                                    <div
                                      data-layer="Text"
                                      className="Text grow shrink basis-0 text-gray-900 text-base font-normal font-['Inter'] leading-normal"
                                    >
                                      UtkarshDhairyaPanwar
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-layer="Navigation"
                          className="Navigation self-stretch h-[308px] flex-col justify-start items-start flex"
                        >
                          <div
                            data-layer="_Nav item base"
                            className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Content"
                              className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                            >
                              <div
                                data-layer="Text and icon"
                                className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                              >
                                <div
                                  data-layer="Frame 10"
                                  className="Frame10 w-6 pr-[3.76px] py-[3.01px] justify-center items-center flex"
                                />
                                <div
                                  data-layer="Text"
                                  className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                                >
                                  Repositories
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="_Nav item base"
                            className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Content"
                              className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                            >
                              <div
                                data-layer="Text and icon"
                                className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                              >
                                <div
                                  data-layer="Frame 10"
                                  className="Frame10 w-6 h-6 pr-[1.50px] pt-[3px] pb-[3.03px] justify-center items-center flex"
                                />
                                <div
                                  data-layer="Text"
                                  className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                                >
                                  AI Code Review
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="_Nav item base"
                            className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Content"
                              className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                            >
                              <div
                                data-layer="Text and icon"
                                className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                              >
                                <div
                                  data-layer="Frame 10"
                                  className="Frame10 w-6 h-6 pr-[1.50px] py-[4.12px] justify-center items-center flex"
                                />
                                <div
                                  data-layer="Text"
                                  className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                                >
                                  Cloud Security
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="_Nav item base"
                            className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Content"
                              className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                            >
                              <div
                                data-layer="Text and icon"
                                className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                              >
                                <div
                                  data-layer="Frame 10"
                                  className="Frame10 w-6 pr-[8.25px] py-[3px] justify-start items-center flex"
                                />
                                <div
                                  data-layer="Text"
                                  className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                                >
                                  How to Use
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="_Nav item base"
                            className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Content"
                              className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                            >
                              <div
                                data-layer="Text and icon"
                                className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                              >
                                <div
                                  data-layer="Frame 10"
                                  className="Frame10 w-6 pr-[6.65px] py-[3px] justify-start items-center flex"
                                />
                                <div
                                  data-layer="Text"
                                  className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                                >
                                  Settings
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="_Nav item base"
                            className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Content"
                              className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                            >
                              <div
                                data-layer="Text and icon"
                                className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                              >
                                <div
                                  data-layer="Frame 10"
                                  className="Frame10 w-6 pr-1.5 py-[3.01px] justify-start items-center flex"
                                />
                                <div
                                  data-layer="Text"
                                  className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                                >
                                  Support
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="_Nav item base"
                            className="NavItemBase self-stretch py-0.5 justify-start items-center inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Content"
                              className="Content grow shrink basis-0 h-10 px-3 py-2 bg-white rounded-md justify-start items-center gap-3 flex"
                            >
                              <div
                                data-layer="Text and icon"
                                className="TextAndIcon grow shrink basis-0 h-6 justify-start items-center gap-2 flex"
                              >
                                <div
                                  data-layer="Frame 10"
                                  className="Frame10 w-6 pr-1.5 py-[4.12px] justify-start items-center flex"
                                />
                                <div
                                  data-layer="Text"
                                  className="Text text-gray-700 text-base font-semibold font-['Inter'] leading-normal"
                                >
                                  Logout
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-layer="Calendar"
                      className="Calendar h-[824px] bg-white flex-col justify-start items-start flex overflow-hidden"
                    >
                      <div
                        data-layer="Header"
                        className="Header self-stretch h-52 bg-white border-b border-gray-200 flex-col justify-start items-start gap-4 flex"
                      >
                        <div
                          data-layer="Content"
                          className="Content self-stretch h-52 px-4 py-5 flex-col justify-start items-start gap-4 flex"
                        >
                          <div
                            data-layer="Frame 990"
                            className="Frame990 self-stretch h-[108px] flex-col justify-start items-start gap-3 flex"
                          >
                            <div
                              data-layer="Date and text"
                              className="DateAndText self-stretch h-14 flex-col justify-start items-start gap-1 flex"
                            >
                              <div
                                data-layer="Text"
                                className="Text text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose"
                              >
                                Repositories
                              </div>
                              <div
                                data-layer="Text"
                                className="Text text-gray-700 text-sm font-normal font-['Inter'] leading-tight"
                              >
                                33 total repositories
                              </div>
                            </div>
                            <div
                              data-layer="Frame 1014"
                              className="Frame1014 justify-start items-center gap-3 inline-flex"
                            >
                              <div
                                data-layer="Button"
                                className="Button px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border border-zinc-300 justify-center items-center gap-1 flex overflow-hidden"
                              >
                                <div
                                  data-layer="Frame 1015"
                                  className="Frame1015 w-5 pl-[0.53px] pr-[2.56px] pt-[1.81px] pb-[1.31px] justify-center items-center flex"
                                />
                                <div
                                  data-layer="Text padding"
                                  className="TextPadding px-0.5 justify-center items-center flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-gray-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Refresh All
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Button"
                                className="Button px-3.5 py-2.5 bg-blue-600 rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border-2 border-white justify-center items-center gap-1 flex overflow-hidden"
                              >
                                <div
                                  data-layer="Frame 1015"
                                  className="Frame1015 w-5 pl-[0.56px] pr-[4.81px] pt-[2.97px] pb-[2.40px] justify-start items-center flex"
                                />
                                <div
                                  data-layer="Text padding"
                                  className="TextPadding px-0.5 justify-center items-center flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-white text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Add Repository
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="Buttons/Button"
                            className="ButtonsButton self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18)] border border-zinc-300 justify-start items-center gap-1 inline-flex overflow-hidden"
                          >
                            <div
                              data-layer="Frame 10"
                              className="Frame10 w-6 pr-1.5 pt-[3.25px] pb-[2.75px] justify-start items-center flex"
                            />
                            <div
                              data-layer="Text padding"
                              className="TextPadding px-0.5 justify-center items-center flex"
                            >
                              <div
                                data-layer="Text"
                                className="Text text-gray-700 text-base font-normal font-['Inter'] leading-tight"
                              >
                                Search Repositories
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-layer="Main"
                        className="Main self-stretch justify-start items-start inline-flex"
                      >
                        <div
                          data-layer="Frame 1018"
                          className="Frame1018 grow shrink basis-0 flex-col justify-center items-start inline-flex"
                        >
                          <div
                            data-layer="Frame 1018"
                            className="Frame1018 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                          >
                            <div
                              data-layer="Frame 1019"
                              className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                            >
                              <div
                                data-layer="Repo"
                                className="Repo justify-center items-center gap-2 inline-flex"
                              >
                                <div
                                  data-layer="design-system"
                                  className="DesignSystem text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                                >
                                  design-system
                                </div>
                                <div
                                  data-layer="Badge"
                                  className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Public
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Frame 1017"
                                className="Frame1017 justify-start items-start gap-6 inline-flex"
                              >
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="React"
                                    className="React text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    React
                                  </div>
                                  <div
                                    data-layer="Ellipse 1"
                                    className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                                  />
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="7320 KB"
                                    className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    7320 KB
                                  </div>
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Updated 1 day ago"
                                    className="Updated1DayAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Updated 1 day ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="Frame 1016"
                            className="Frame1016 self-stretch h-[88px] py-4 bg-white border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                          >
                            <div
                              data-layer="Frame 1019"
                              className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                            >
                              <div
                                data-layer="Repo"
                                className="Repo justify-center items-center gap-2 inline-flex"
                              >
                                <div
                                  data-layer="codeant-ci-app"
                                  className="CodeantCiApp text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                                >
                                  codeant-ci-app
                                </div>
                                <div
                                  data-layer="Badge"
                                  className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Private
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Frame 1017"
                                className="Frame1017 justify-start items-start gap-6 inline-flex"
                              >
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Javascript"
                                    className="Javascript text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Javascript
                                  </div>
                                  <div
                                    data-layer="Ellipse 1"
                                    className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                                  />
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="5871 KB"
                                    className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    5871 KB
                                  </div>
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Updated 2 days ago"
                                    className="Updated2DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Updated 2 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="Frame 1019"
                            className="Frame1019 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                          >
                            <div
                              data-layer="Frame 1019"
                              className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                            >
                              <div
                                data-layer="Repo"
                                className="Repo justify-center items-center gap-2 inline-flex"
                              >
                                <div
                                  data-layer="analytics-dashboard"
                                  className="AnalyticsDashboard text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                                >
                                  analytics-dashboard
                                </div>
                                <div
                                  data-layer="Badge"
                                  className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Private
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Frame 1017"
                                className="Frame1017 justify-start items-start gap-6 inline-flex"
                              >
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Python"
                                    className="Python text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Python
                                  </div>
                                  <div
                                    data-layer="Ellipse 1"
                                    className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                                  />
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="4521 KB"
                                    className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    4521 KB
                                  </div>
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Updated 5 days ago"
                                    className="Updated5DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Updated 5 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="Frame 1020"
                            className="Frame1020 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                          >
                            <div
                              data-layer="Frame 1019"
                              className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                            >
                              <div
                                data-layer="Repo"
                                className="Repo justify-center items-center gap-2 inline-flex"
                              >
                                <div
                                  data-layer="mobile-app"
                                  className="MobileApp text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                                >
                                  mobile-app
                                </div>
                                <div
                                  data-layer="Badge"
                                  className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Public
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Frame 1017"
                                className="Frame1017 justify-start items-start gap-6 inline-flex"
                              >
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Swift"
                                    className="Swift text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Swift
                                  </div>
                                  <div
                                    data-layer="Ellipse 1"
                                    className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                                  />
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="3096 KB"
                                    className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    3096 KB
                                  </div>
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Updated 3 days ago"
                                    className="Updated3DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Updated 3 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="Frame 1021"
                            className="Frame1021 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                          >
                            <div
                              data-layer="Frame 1019"
                              className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                            >
                              <div
                                data-layer="Repo"
                                className="Repo justify-center items-center gap-2 inline-flex"
                              >
                                <div
                                  data-layer="e-commerce-platform"
                                  className="ECommercePlatform text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                                >
                                  e-commerce-platform
                                </div>
                                <div
                                  data-layer="Badge"
                                  className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Private
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Frame 1017"
                                className="Frame1017 justify-start items-start gap-6 inline-flex"
                              >
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Java"
                                    className="Java text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Java
                                  </div>
                                  <div
                                    data-layer="Ellipse 1"
                                    className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                                  />
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="6210 KB"
                                    className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    6210 KB
                                  </div>
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Updated 6 days ago"
                                    className="Updated6DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Updated 6 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="Frame 1022"
                            className="Frame1022 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                          >
                            <div
                              data-layer="Frame 1019"
                              className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                            >
                              <div
                                data-layer="Repo"
                                className="Repo justify-center items-center gap-2 inline-flex"
                              >
                                <div
                                  data-layer="blog-website"
                                  className="BlogWebsite text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                                >
                                  blog-website
                                </div>
                                <div
                                  data-layer="Badge"
                                  className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Public
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Frame 1017"
                                className="Frame1017 justify-start items-start gap-6 inline-flex"
                              >
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="HTML/CSS"
                                    className="HtmlCss text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    HTML/CSS
                                  </div>
                                  <div
                                    data-layer="Ellipse 1"
                                    className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                                  />
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="1876 KB"
                                    className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    1876 KB
                                  </div>
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Updated 4 days ago"
                                    className="Updated4DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Updated 4 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-layer="Frame 1023"
                            className="Frame1023 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
                          >
                            <div
                              data-layer="Frame 1019"
                              className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                            >
                              <div
                                data-layer="Repo"
                                className="Repo justify-center items-center gap-2 inline-flex"
                              >
                                <div
                                  data-layer="social-network"
                                  className="SocialNetwork text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                                >
                                  social-network
                                </div>
                                <div
                                  data-layer="Badge"
                                  className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                                >
                                  <div
                                    data-layer="Text"
                                    className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Private
                                  </div>
                                </div>
                              </div>
                              <div
                                data-layer="Frame 1017"
                                className="Frame1017 justify-start items-start gap-6 inline-flex"
                              >
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="PHP"
                                    className="Php text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    PHP
                                  </div>
                                  <div
                                    data-layer="Ellipse 1"
                                    className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                                  />
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="5432 KB"
                                    className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    5432 KB
                                  </div>
                                </div>
                                <div
                                  data-layer="Repo"
                                  className="Repo justify-center items-center gap-2 flex"
                                >
                                  <div
                                    data-layer="Updated 7 days ago"
                                    className="Updated7DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                                  >
                                    Updated 7 days ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            data-layer="Main"
            className="Main self-stretch justify-start items-start inline-flex"
          >
            <div
              data-layer="Frame 1018"
              className="Frame1018 grow shrink basis-0 flex-col justify-center items-start inline-flex"
            >
              <div
                data-layer="Frame 1018"
                className="Frame1018 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
              >
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                >
                  <div
                    data-layer="Repo"
                    className="Repo justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      data-layer="design-system"
                      className="DesignSystem text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                    >
                      design-system
                    </div>
                    <div
                      data-layer="Badge"
                      className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Public
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1017"
                    className="Frame1017 justify-start items-start gap-6 inline-flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="React"
                        className="React text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        React
                      </div>
                      <div
                        data-layer="Ellipse 1"
                        className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                      />
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="7320 KB"
                        className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        7320 KB
                      </div>
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Updated 1 day ago"
                        className="Updated1DayAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Updated 1 day ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Frame 1016"
                className="Frame1016 self-stretch h-[88px] py-4 bg-white border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
              >
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                >
                  <div
                    data-layer="Repo"
                    className="Repo justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      data-layer="codeant-ci-app"
                      className="CodeantCiApp text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                    >
                      codeant-ci-app
                    </div>
                    <div
                      data-layer="Badge"
                      className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Private
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1017"
                    className="Frame1017 justify-start items-start gap-6 inline-flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Javascript"
                        className="Javascript text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Javascript
                      </div>
                      <div
                        data-layer="Ellipse 1"
                        className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                      />
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="5871 KB"
                        className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        5871 KB
                      </div>
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Updated 2 days ago"
                        className="Updated2DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Updated 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Frame 1019"
                className="Frame1019 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
              >
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                >
                  <div
                    data-layer="Repo"
                    className="Repo justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      data-layer="analytics-dashboard"
                      className="AnalyticsDashboard text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                    >
                      analytics-dashboard
                    </div>
                    <div
                      data-layer="Badge"
                      className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Private
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1017"
                    className="Frame1017 justify-start items-start gap-6 inline-flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Python"
                        className="Python text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Python
                      </div>
                      <div
                        data-layer="Ellipse 1"
                        className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                      />
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="4521 KB"
                        className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        4521 KB
                      </div>
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Updated 5 days ago"
                        className="Updated5DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Updated 5 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Frame 1020"
                className="Frame1020 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
              >
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                >
                  <div
                    data-layer="Repo"
                    className="Repo justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      data-layer="mobile-app"
                      className="MobileApp text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                    >
                      mobile-app
                    </div>
                    <div
                      data-layer="Badge"
                      className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Public
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1017"
                    className="Frame1017 justify-start items-start gap-6 inline-flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Swift"
                        className="Swift text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Swift
                      </div>
                      <div
                        data-layer="Ellipse 1"
                        className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                      />
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="3096 KB"
                        className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        3096 KB
                      </div>
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Updated 3 days ago"
                        className="Updated3DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Updated 3 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Frame 1021"
                className="Frame1021 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
              >
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                >
                  <div
                    data-layer="Repo"
                    className="Repo justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      data-layer="e-commerce-platform"
                      className="ECommercePlatform text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                    >
                      e-commerce-platform
                    </div>
                    <div
                      data-layer="Badge"
                      className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Private
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1017"
                    className="Frame1017 justify-start items-start gap-6 inline-flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Java"
                        className="Java text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Java
                      </div>
                      <div
                        data-layer="Ellipse 1"
                        className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                      />
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="6210 KB"
                        className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        6210 KB
                      </div>
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Updated 6 days ago"
                        className="Updated6DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Updated 6 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Frame 1022"
                className="Frame1022 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
              >
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                >
                  <div
                    data-layer="Repo"
                    className="Repo justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      data-layer="blog-website"
                      className="BlogWebsite text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                    >
                      blog-website
                    </div>
                    <div
                      data-layer="Badge"
                      className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Public
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1017"
                    className="Frame1017 justify-start items-start gap-6 inline-flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="HTML/CSS"
                        className="HtmlCss text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        HTML/CSS
                      </div>
                      <div
                        data-layer="Ellipse 1"
                        className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                      />
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="1876 KB"
                        className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        1876 KB
                      </div>
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Updated 4 days ago"
                        className="Updated4DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Updated 4 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-layer="Frame 1023"
                className="Frame1023 self-stretch h-[88px] py-4 border-b border-zinc-300 flex-col justify-center items-start gap-3 flex"
              >
                <div
                  data-layer="Frame 1019"
                  className="Frame1019 px-4 flex-col justify-start items-start gap-3 flex"
                >
                  <div
                    data-layer="Repo"
                    className="Repo justify-center items-center gap-2 inline-flex"
                  >
                    <div
                      data-layer="social-network"
                      className="SocialNetwork text-gray-900 text-lg font-medium font-['Inter'] leading-normal"
                    >
                      social-network
                    </div>
                    <div
                      data-layer="Badge"
                      className="Badge pl-2 pr-2.5 py-0.5 bg-sky-50 rounded-full border border-sky-200 justify-start items-center gap-1 flex"
                    >
                      <div
                        data-layer="Text"
                        className="Text text-center text-blue-700 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Private
                      </div>
                    </div>
                  </div>
                  <div
                    data-layer="Frame 1017"
                    className="Frame1017 justify-start items-start gap-6 inline-flex"
                  >
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="PHP"
                        className="Php text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        PHP
                      </div>
                      <div
                        data-layer="Ellipse 1"
                        className="Ellipse1 w-2 h-2 bg-blue-600 rounded-full"
                      />
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="5432 KB"
                        className="Kb text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        5432 KB
                      </div>
                    </div>
                    <div
                      data-layer="Repo"
                      className="Repo justify-center items-center gap-2 flex"
                    >
                      <div
                        data-layer="Updated 7 days ago"
                        className="Updated7DaysAgo text-gray-900 text-sm font-normal font-['Inter'] leading-tight"
                      >
                        Updated 7 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repository;
