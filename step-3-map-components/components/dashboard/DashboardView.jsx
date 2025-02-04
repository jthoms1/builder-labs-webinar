import * as React from "react";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import Charts from "./components/Charts";

export default function DashboardView() {
  return (
    <main className="flex flex-col">
      <div className="flex overflow-hidden relative flex-col flex-1 w-full bg-white max-md:max-w-full">
        <Header />
        <div className="flex z-0 flex-col justify-center items-center self-center pb-10 max-w-full w-[1320px]">
          <section className="flex justify-between items-start w-full max-md:max-w-full">
            <div className="flex items-start min-w-[240px] w-[1280px]">
              <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                <nav
                  className="flex flex-col items-start pt-5 pb-6 w-full text-sm leading-loose whitespace-nowrap max-md:max-w-full"
                  aria-label="Breadcrumb"
                >
                  <div className="flex items-start">
                    <div className="flex gap-2 justify-center items-center pr-2 text-blue-400">
                      <div className="self-stretch my-auto">Service</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/bcaaaba050aefc081ee350b299069e83efd0705e4c0a34e643a5f6fc86c6b614?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                        alt=""
                      />
                    </div>
                    <div className="text-slate-500">ResourceType</div>
                  </div>
                </nav>
                <div className="flex flex-col pb-3 w-full rounded-2xl max-md:max-w-full">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-10 justify-between items-center w-full font-extrabold max-md:max-w-full">
                      <h1 className="flex flex-col self-stretch my-auto text-3xl tracking-tighter leading-none min-w-[240px] text-slate-950">
                        <div className="flex gap-1 items-center">
                          <div className="self-stretch my-auto">
                            Collection title
                          </div>
                          <div className="flex self-stretch my-auto min-h-[30px]" />
                        </div>
                      </h1>
                      <div className="flex flex-col items-end self-stretch my-auto text-sm leading-loose min-w-[240px]">
                        <div className="flex gap-2 items-start">
                          <button className="flex items-center text-blue-400">
                            <div className="gap-2 self-stretch px-6 py-1.5 my-auto border-2 border-blue-400 border-solid rounded-[40px] max-md:px-5">
                              Last Month
                            </div>
                          </button>
                          <button className="flex items-start text-white">
                            <div className="gap-2 self-stretch px-6 py-1.5 bg-blue-400 border-2 border-blue-400 border-solid rounded-[40px] max-md:px-5">
                              Last Week
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="mt-1 w-full text-sm leading-loose text-gray-400 max-md:max-w-full">
                      Collection description
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-10 items-center mt-4 w-full max-md:max-w-full">
                    <form
                      className="flex flex-1 shrink justify-between items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full"
                      role="search"
                    >
                      <div className="flex flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                        <div className="flex flex-1 shrink items-center basis-0 min-w-[240px] size-full max-md:max-w-full">
                          <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                            <div className="flex w-full max-md:max-w-full">
                              <div className="flex flex-wrap flex-1 shrink items-center rounded-lg border-2 border-gray-500 border-solid basis-0 min-w-[240px] size-full max-md:max-w-full">
                                <div className="flex shrink-0 self-stretch my-auto w-2 rounded-lg h-[34px]" />
                                <div className="flex items-center self-stretch px-1 py-2.5 my-auto w-6">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/164d57296bf7357a5de61c2bc631f8bd6de58fdf214ec174277d1cb2f332ba95?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
                                    className="object-contain self-stretch my-auto w-4 aspect-square"
                                    alt=""
                                  />
                                </div>
                                <label
                                  htmlFor="searchInput2"
                                  className="sr-only"
                                >
                                  Search
                                </label>
                                <input
                                  type="search"
                                  id="searchInput2"
                                  className="flex-1 shrink self-stretch py-1.5 pr-3 pl-1.5 my-auto text-sm italic leading-loose text-gray-500 whitespace-nowrap min-w-[240px] max-md:max-w-full bg-transparent border-none focus:outline-none"
                                  placeholder="Placeholder"
                                  aria-label="Search"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <nav
                      className="flex gap-2 items-center self-stretch my-auto"
                      aria-label="Pagination"
                    >
                      <button
                        className="flex items-start self-stretch my-auto"
                        aria-label="Previous page"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/0c8f293ab2b48605127b7e7c4f402f59c483a8d21dc8bd8b75a772643bc8196c?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
                          className="object-contain w-6 aspect-square"
                          alt=""
                        />
                      </button>
                      <div className="flex items-center">
                        <button
                          aria-current="page"
                          className="w-7 h-7 text-sm font-extrabold leading-loose text-center text-zinc-50"
                        >
                          1
                        </button>
                        <button className="w-7 h-7 text-sm leading-loose text-center text-gray-400">
                          2
                        </button>
                        <button className="w-7 h-7 text-sm leading-loose text-center text-gray-400">
                          3
                        </button>
                        <button className="w-7 h-7 text-sm leading-loose text-center text-gray-400">
                          4
                        </button>
                        <button className="w-7 h-7 text-sm leading-loose text-center text-gray-400">
                          5
                        </button>
                      </div>
                      <button
                        className="flex items-start self-stretch my-auto"
                        aria-label="Next page"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/3ae48f28ed5b826179fd1f6704779040387d6e1fa184bc1d67325e91f0f29de1?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
                          className="object-contain w-6 aspect-square"
                          alt=""
                        />
                      </button>
                      <div
                        className="flex shrink-0 self-stretch w-0.5 bg-gray-600 h-[34px]"
                        role="separator"
                      />
                      <button aria-label="View options">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/029a984a28af46414a409f62cc5de8562989d338149f2af53f51fd5016248396?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
                          className="object-contain shrink-0 self-stretch my-auto aspect-[0.81] w-[26px]"
                          alt=""
                        />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Charts />
          <DataTable />
        </div>
        <nav
          className="flex absolute left-0 top-14 z-0 items-start px-5 pt-3 w-20"
          aria-label="Side navigation"
        >
          <button
            className="flex overflow-hidden items-start w-10"
            aria-label="Menu"
          >
            <div className="flex gap-2 justify-center items-center px-3 w-10 h-10 bg-slate-800 min-h-[40px] rounded-[40px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/4aa4f1fb74f37fd8768c306b0494495079f1a3d5aa1b491a265093115a10cef5?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt=""
              />
            </div>
          </button>
        </nav>
        <aside className="flex absolute right-0 top-14 z-0 flex-col px-5 pt-3 w-20">
          <button
            className="flex overflow-hidden items-start w-full max-w-[40px]"
            aria-label="Settings"
          >
            <div className="flex gap-2 justify-center items-center px-2.5 w-10 h-10 bg-slate-800 min-h-[40px] rounded-[40px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/fff56e293c37746b1c1b351d4a2cd2d8094a2ba8cd88abc9d6eb1514d123ae59?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
                className="object-contain self-stretch my-auto w-4 aspect-square"
                alt=""
              />
            </div>
          </button>
        </aside>
      </div>
    </main>
  );
}
