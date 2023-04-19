import React from 'react'
import tableColumnsTopCreators from '../variables/tableDataTopCreators';


const Applicants = () => {
  return (
    <div className="overflow-x-auto mt-5">
    <table className="table table-zebra w-full">
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
  </div>
  )
}

export default Applicants   