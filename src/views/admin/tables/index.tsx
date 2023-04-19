import tableDataDevelopment from "./variables/tableDataDevelopment";
import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataComplex from "./variables/tableDataComplex";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <h2>Post new Problem</h2>
          <form className="mt-5">
          <input 
          type="text" 
          placeholder="problem Title" 
          className="input input-bordered input-info w-full mb-3" />
          <textarea 
          placeholder="problem description" 
          className="textarea textarea-bordered textarea-lg w-full" 
          style={{minHeight: "70vh"}}
          ></textarea>
          <button className="btn btn-block btn-success">submit</button>

          </form>
        </div>
        <CheckTable tableData={tableDataCheck} />
      </div>

      <div className="mt-5  h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};

export default Tables;
