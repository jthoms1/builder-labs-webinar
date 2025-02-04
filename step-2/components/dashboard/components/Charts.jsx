import * as React from "react";

export default function Charts() {
  return (
    <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-2.5 justify-center items-center pt-10 pb-12 max-w-full w-[1246px]">
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
}

function LineChart() {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto text-sm leading-loose bg-white basis-0 min-w-[200px] text-slate-950 max-md:max-w-full">
      <div className="flex flex-col w-full font-bold max-md:max-w-full">
        <div className="self-start pb-4">y-axis label</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/dabc17aa82176c6f9f345da794bea1240e318f5b7a3ec70d1d9f6f62e8510dba?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
          className="object-contain w-full aspect-[2.06] max-md:max-w-full"
          alt="Line chart showing data trends"
        />
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div>X-axis label</div>
        </div>
      </div>
      <ChartLegend />
    </div>
  );
}

function BarChart() {
  const yAxisLabels = ["y6", "y5", "y4", "y3", "y2", "y1"];
  const xAxisLabels = ["x1", "x2", "x3", "x4", "x5"];
  const barHeights = ["183px", "257px", "213px", "122px", "210px"];

  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto bg-white basis-0 min-w-[200px] max-md:max-w-full">
      <div className="flex flex-col w-full min-h-[360px] max-md:max-w-full">
        <div className="self-start pb-4 text-sm font-bold leading-loose text-slate-950">
          y-axis label
        </div>
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <YAxisLabels labels={yAxisLabels} />
            <BarGroup labels={xAxisLabels} heights={barHeights} />
          </div>
        </div>
        <div className="flex flex-col items-center w-full text-sm font-bold leading-loose text-slate-950 max-md:max-w-full">
          <div>X-axis label</div>
        </div>
      </div>
      <ChartLegend showSecondSite={false} />
    </div>
  );
}

function YAxisLabels({ labels }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-between mr-0 w-full text-xs leading-none text-right text-gray-500 whitespace-nowrap min-h-[284px] max-md:max-w-full">
        {labels.map((label, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-1 items-center w-full max-md:max-w-full"
          >
            <div className="self-stretch my-auto w-12">{label}</div>
            <div className="flex flex-1 shrink self-stretch my-auto h-px bg-gray-200 basis-0 min-w-[240px] w-[566px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BarGroup({ labels, heights }) {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-wrap grow justify-center items-end -mt-2.5 min-h-[310px]">
        {labels.map((label, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 shrink basis-0 min-h-[225px]"
          >
            <div className="flex gap-2.5 justify-center items-end px-2.5 w-full">
              <div className="flex flex-col flex-1 shrink w-full basis-0">
                <div
                  className="flex shrink-0 bg-indigo-400 rounded border-t-2 border-solid border-t-white border-x-2 border-x-white"
                  style={{ height: heights[index] }}
                />
              </div>
            </div>
            <div className="flex w-full bg-gray-300 min-h-[1px]" />
            <div className="flex self-center w-px bg-gray-300 min-h-[8px]" />
            <div className="self-center text-xs leading-none text-center text-gray-500">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartLegend({ showSecondSite = true }) {
  return (
    <div className="flex gap-4 items-start self-start pt-4 mt-4">
      <div className="flex gap-1 items-center">
        <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 rounded-sm border border-indigo-400 border-solid bg-indigo-400 bg-opacity-40" />
        <div className="self-stretch my-auto">Site 1</div>
      </div>
      {showSecondSite && (
        <div className="flex gap-1 items-center">
          <div className="flex shrink-0 self-stretch my-auto w-3.5 h-3.5 rounded-sm border border-pink-600 border-solid bg-pink-600 bg-opacity-40" />
          <div className="self-stretch my-auto">Site 2</div>
        </div>
      )}
      <div className="flex gap-1 items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c02ad0ec69734e09a26aa2ba1c8d8084/cf9b2e147502ac66821bd3e4fb5701bc6526aa9fc8e76870dcd3f52829ec5a91?apiKey=c02ad0ec69734e09a26aa2ba1c8d8084&"
          className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[4]"
          alt=""
        />
        <div className="self-stretch my-auto">Performance goal</div>
      </div>
    </div>
  );
}
