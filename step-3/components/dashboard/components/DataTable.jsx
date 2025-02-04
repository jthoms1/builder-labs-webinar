import * as React from "react";

export default function DataTable() {
  const tableData = Array(13).fill({
    cellValue: "Cell Value",
  });

  return (
    <div className="overflow-x-auto w-full">
      <table
        role="table"
        aria-label="Data table"
        className="w-full border-collapse"
      >
        <thead>
          <tr>
            <th
              scope="col"
              className="p-3 font-extrabold leading-none text-left text-gray-600 border-b-2 border-solid border-b-gray-200"
            >
              <div className="flex gap-2 items-center">
                <input type="checkbox" aria-label="Select all rows" />
              </div>
            </th>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <th
                  key={index}
                  scope="col"
                  className="p-3 font-extrabold leading-none text-left text-gray-600 border-b-2 border-solid border-b-gray-200"
                >
                  Column header
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="p-3 border-b border-solid border-b-gray-200">
                <input type="checkbox" aria-label={`Select row ${index + 1}`} />
              </td>
              {Array(5)
                .fill(0)
                .map((_, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="p-3 border-b border-solid border-b-gray-200"
                  >
                    {row.cellValue}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
