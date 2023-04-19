import React, {useEffect, useState} from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Progress from "components/progress";
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";
import fakedata from "../variables/fakedata";


import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  
} from "@tanstack/react-table";


type RowObj = {
  userName:String;
	status: string;
  progress: String
  gitHubRepoUrl : String;
	date: string; 
};
const columnHelper = createColumnHelper<RowObj>();
// const columns = columnsDataCheck;
export default function ComplexTable(props: { tableData: any }) {

  const [status, setStatus] = useState([]) 

  useEffect(()=>{
    let temp = fakedata.map(e => [e,0])
    setStatus(temp)
  },[])
  
  let handleChange = (ind:Number,change:Number) =>{
    let temp = status.map((elem,i) => {
      let [e,num] = elem
      if (i === ind){
        num = change
      }
      return [e,num]
    })
    setStatus(temp)
  }

  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("userName", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">USER NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STATUS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === "Approved" ? (
            <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
          ) : info.getValue() === "Disable" ? (
            <MdCancel className="text-red-500 me-1 dark:text-red-300" />
          ) : info.getValue() === "Error" ? (
            <MdOutlineError className="text-amber-500 me-1 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PROGRESS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          
        </div>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Solutions
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {status.map((row,ind) => {
                return (
                  <tr>
                    <td className="min-w-[150px] border-white/0 py-3  pr-4 text-gray-400"> {row[0].userName}  </td>
                    <div className="dropdown dropdown-bottom">
                      {
                      
                      }
                      <label tabIndex={0} className= {`btn m-1 ${row[1] === 1 ? "btn-success" : row[1] === -1 ? "btn-error" : "btn-warning" } `}>{row[1] === 0 ? "pending" : row[1] === -1 ? "rejected" : "Accepted"}</label>
                      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleChange(ind,1) } >Accept</button></li>
                        <li><button onClick={() => handleChange(ind,-1) }>Reject</button></li>
                        <li><button onClick={() => handleChange(ind,0) }>Pending</button></li>
                      </ul>
                    </div>
                    <td className="min-w-[150px] border-white/0 py-3  pr-4 text-gray-400"> {row[0].date}  </td>
                    <td className="min-w-[150px] border-white/0 py-3 text-black pr-4"><a className="link  link-hover" href={`${row.gitHubRepoUrl}`}>git hub</a>  </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
