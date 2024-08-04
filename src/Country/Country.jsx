import { useEffect, useState } from "react";
import axios from "axios";

function Country()
{
    const [data,setData] = new useState([]);
    useEffect( ()=>{
        try{
        const fetchData= async () => {
            const data= await axios.get('https://xcountries-backend.azurewebsites.net/all');
            setData(data.data);
        }
        fetchData();
        }
        catch(err)
        {
            console.error(err);
        }

    },[]);
    return(
        <div style={{display:"flex",
            flexFlow:"wrap",
            gap:"30px",
        }}>
          {data.map((ele,idx) => ( 
            <div key={idx} style={
                {
                  display:"flex",
                  flexDirection:"column",
                  textAlign:"center",
                  width:"100px",
                  height:"100px",
                  alignItems:"center",
                  borderRadius:"8px",
                  border: "1px solid black", 
                  overflow:"hidden",
                  padding:"5px"
                }
            }>   <div style={{width:"100px",height:"100px"}}> 
                <img src={ele.flag} alt="Text" style={{maxWidth:"100%",maxHeight:"100%",objectFit:"fill"}} />
                </div>
                <h6 style={{padding:"3px"}}>{ele.name}</h6>
            </div>
          ))}
        </div>
    )
 

}

export default Country;