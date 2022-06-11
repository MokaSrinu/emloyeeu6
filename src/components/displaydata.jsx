import React from "react"
const Displaydata=()=>{
    let [data,setData]=React.useState([]);
   

    const display = () => {
        fetch(`http://localhost:3001/employedata`)
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          })
          .catch((err) => {
            setData([]);
          })
      };
    
      React.useEffect(() => {
        display();
      }, []);
     console.log(data)
    return(
        <>
           <>
             <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>SALARY</th>
                    <th>MARITIAL STATUS</th>
                    </tr> 
                </thead>
                <tbody>
                    

                        {data.map((ele)=>{
                 <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.address}</td>
                    <td>{ele.salary}</td>
                    <td>{ele.isMarried}</td>
                 </tr>
                })}

                    
                
                </tbody>
             </table>
           </>
        </>
        
    )
}

export {Displaydata}