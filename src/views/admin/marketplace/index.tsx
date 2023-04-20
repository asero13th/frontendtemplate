import Banner from "./components/Banner";
import Applicants from "./components/Applicants";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators";
import TopCreatorTable from "./components/TableTopCreators";
import React,{useState} from 'react';
import tableColumnsTopCreators from "views/admin/marketplace/variables/tableDataTopCreators";
import fakedata from "./fakedata";
import { Form } from "./Form";





const Marketplace = () => {
  

  const [addJob, setAddJob] = useState(false)
  const [applicants, setApplicants] = useState(false)

  const [title, setTitle] = useState("")
  const [tag, setTag] = useState("")
  const [description, setDescription] = useState("")
  const [numberOfIntern, setNumberOfIntern] = useState(0)
  const [jobs, setJobs] = useState(fakedata)
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {title: title, tags: tag, description: description, applicantNeeded: numberOfIntern}
    setJobs((p) => [...p, data])
    setAddJob(!(addJob))  
  };
  // tag description number of intern 
  function generateRandomNumber() {
    return Math.floor(Math.random() * 200) + 1;
  }
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      {addJob ? 
      <div className="h-full col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2    gap-5" style={{ textAlign: "center"}}>
        <h2>POST JOB</h2>
        <form className="mb-3" onSubmit={ handleSubmit}>
        <input 
          onChange={(event) => setTitle(event.target.value)}
          type="text" 
          placeholder="Job Title" 
          id="title"
          className="input input-bordered input-info w-full mb-3" 
          
          />
        <input 
        type="text" 
        placeholder="add tags" 
        className="input w-full  mb-3" 
        id="tag"
        onChange = {(event) => setTag(event.target.value)} 
        />
        <textarea
        onChange = {(event) => setDescription(event.target.value)} 
        placeholder="description " 
        className="textarea textarea-bordered textarea-lg w-full" 
        style={{minHeight:"50vh"}}
        id="desc"
        ></textarea>
        <input  
        type="Number" 
        placeholder="applicant needed" 
        className="input w-full  mb-3" 
        id="" 
        onChange = {(event) => setNumberOfIntern(parseInt(event.target.value))} 
        />
        <br />
        <button className="btn btn-success btn-wide mr-3 ">Submit</button>
        <button className="btn btn-warning btn-wide ">Clear</button>
        </form>
        <button className="btn btn-info btn-block mr-3"
        onClick={() =>{
          setAddJob(false)
        }}
        >Back to Jobs</button>
      </div>
      :
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
      <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] mb-5"
      style={{ backgroundColor: `#d9f1ff` }}
    >
      {
        jobs.map((job, idx) => {
          return(
            <div className=" mb-3">
              <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                {job.title}
              </h4>
              <div className="mb-5 mr-3" style={{display:"flex", justifyContent: "center"}}>
                <div className=" mr-3"><p>Tags:</p></div>
                <span>{job.tags}</span>
              </div>

              <p className="mb-[40px] max-w-full text-base font-medium text-[#333] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[85%]">
              {job.description}
              </p>

              <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                <button 
                onClick={() => setApplicants(true)}
                className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
                Go to  Applicants
                </button>
                <button className="text-base font-medium text-sucess   hover:text-lightPrimary 2xl:ml-2">
                  {generateRandomNumber()}
                </button>
              </div>
      </div>
          )
        })
      }

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
      </table>
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
          {setAddJob(!(addJob))
          setApplicants(false)}
          }>
        <div className="badge badge-secondary">+  new</div>
        </button>

      </div>
    </div>
  );  
};

export default Marketplace;
