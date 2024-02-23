import React,{useState} from "react";
import { useContext } from "react";
import noteContext from "../../context/notes/noteContext";
const Team = () => {
    const a = useContext(noteContext)
    
    const [data, setData] = useState('');
    const handleChange = (e) => {
        return setData(e.target.value)
        

    }
    return (
        <div>
            This is team {a.name} and he is in {a.job}
            <input type="text" value="" onChange={handleChange} />


            <p>{data}</p>
        </div>



        // <div style={{ backgroundColor: "#00204a" , padding:"10px"}}>
        //     <h1 style={{ textAlign: "center", color: "white" }}>Our
        //         <span style={{ color: "#00bbf0" }}> Team </span>
        //     </h1>

        //     <div style={{display:"flex" , marginRight:"10px"}}>
        //         <div style={{ backgroundColor: "#002759", width: "25%", padding: "10px", textAlign: "center" }}>
        //             <img style={{ width: "100px", justifyContent: "center" }} src="./team-1.jpg" alt="" />
        //             <h2 style={{ color: "#00bbf0" }}>Joseph Brown</h2>
        //             <h4 style={{ color: "white" }}>Marketing Head</h4>

        //         </div>

        //         <div style={{ backgroundColor: "#002759", width: "25%", padding: "10px", textAlign: "center" }}>
        //             <img style={{ width: "100px", justifyContent: "center" }} src="./team-2.jpg" alt="" />
        //             <h2 style={{ color: "#00bbf0" }}>Nancy White</h2>
        //             <h4 style={{ color: "white" }}>Marketing Head</h4>

        //         </div>

        //         <div style={{ backgroundColor: "#002759", width: "25%", padding: "10px", textAlign: "center" }}>
        //             <img style={{ width: "100px", justifyContent: "center" }} src="./team-3.jpg" alt="" />
        //             <h2 style={{ color: "#00bbf0" }}>Earl Martinez</h2>
        //             <h4 style={{ color: "white" }}>Marketing Head</h4>

        //         </div>

        //         <div style={{ backgroundColor: "#002759", width: "25%", padding: "10px", textAlign: "center" }}>
        //             <img style={{ width: "100px", justifyContent: "center" }} src="./team-4.jpg" alt="" />
        //             <h2 style={{ color: "#00bbf0" }}>Josephine Allard</h2>
        //             <h4 style={{ color: "white" }}>Marketing Head</h4>

        //         </div>

        //     </div>
        // </div>
    )
}
export default Team;