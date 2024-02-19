import React from "react";
const List = (props) => {
    return <div  className="list" style={{ color: '#000' }}>
        <ul style={{color:'black', listStyleType :'none', textAlign:'center' , display :'flex' , justifyContent :'space-between' , cursor :'pointer'}}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Help</li>
            
        </ul>
    </div>;
}   
export default List;