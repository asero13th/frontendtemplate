import Banner from "./components/Banner";
import Applicants from "./components/Applicants";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators";
import TopCreatorTable from "./components/TableTopCreators";
import React,{useState} from 'react';
import tableColumnsTopCreators from "views/admin/marketplace/variables/tableDataTopCreators";
const Marketplace = () => {
  const [addJob, setAddJob] = useState(false)
  const [applicants, setApplicants] = useState(false)

  const [title, setTitle] = useState("")
  const [tag, setTag] = useState([])
  const [description, setDescription] = useState("")
  const [numberOfIntern, setNumberOfIntern] = useState(0)

  // tag description number of intern 

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      {addJob ? 
      <div className="h-full col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2    gap-5" style={{ textAlign: "center"}}>
        <h2>POST JOB</h2>
        <form className="mb-3">
        <input 
          type="text" 
          placeholder="Job Title" 
          className="input input-bordered input-info w-full mb-3" />
        <input type="text" placeholder="add tags" className="input w-full  mb-3" />
        <textarea 
        placeholder="description " 
        className="textarea textarea-bordered textarea-lg w-full" 
        style={{minHeight:"50vh"}}
        ></textarea>
        <input type="Number" placeholder="applicant needed" className="input w-full  mb-3" />
        <br />
        <button className="btn btn-success btn-wide mr-3 ">Submit</button>
        <button className="btn btn-error btn-wide ">Clear</button>
        </form>
        <button className="btn btn-info btn-block mr-3"
        onClick={() =>{setAddJob(false)}}
        >Back to Jobs</button>
      </div>
      :
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
      <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] mb-5"
      style={{ backgroundColor: `#d9f1ff` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Job title
        </h4>
        <div className="mb-5" style={{display:"flex", justifyContent: "space-around"}}>
          <div><p>Tags</p></div>
          <div className="badge badge-primary">node</div>
          <div className="badge badge-primary">backend</div>
          <div className="badge badge-primary">express</div>
        </div>

        <p className="mb-[40px] max-w-full text-base font-medium text-[#333] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[85%]">
          Job description Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat saepe, inventore eveniet
           ab quia obcaecati quae voluptatem laboriosam enim excepturi veniam! Mollitia voluptatibus at quibusdam 
           voluptatum tempora provident corporis. Culpa.
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button 
          onClick={() => setApplicants(true)}
          className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
           Go to  Applicants
          </button>
          <button className="text-base font-medium text-sucess   hover:text-lightPrimary 2xl:ml-2">
            x120
          </button>
        </div>
      </div>
    </div> 
    </div>
      }
      {applicants ? 
      <div className="overflow-x-auto mt-5">
      <table className="table table-zebra w-full mb-3">
        {/* head */}
        <thead>
          <tr>
  
            <th>Name</th>
            <th>solved problems</th>
            <th>rank</th>
          </tr>
        </thead>
        <tbody>
        {
          tableColumnsTopCreators.map((item) =>{
          return(
              <tr>
                  <td>{item.name[0]}</td>
                  <td>{item.solvedProblems}</td>
                  <td>{item.rating}</td>
              </tr> 
          )   
          })
        }
           
        </tbody>
      </table>s
      <button 
      onClick={()=>{
        setApplicants(false)
      }}
      className="btn btn-block btn-success">Top Performers</button>
    </div>
      : 
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable tableData={tableDataTopCreators} />
      </div>
      }
      <div 
      style={{position:"fixed",right:"-10" }}
      >
        <button onClick={() => 
          {setAddJob(true)
          setApplicants(false)}
          }>
        <div className="badge badge-secondary">+  new</div>
        </button>

      </div>
    </div>
  );  
};

export default Marketplace;
