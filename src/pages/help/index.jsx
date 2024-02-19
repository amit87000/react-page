import React from "react";
import Button from "../../components/Button/Button";
import List from '../../components/List/List';
import Heading from "../../components/Heading/Heading";
const Help = () => {
    return (
        <div style={{ margin: "30px", backgroundColor: "" }}>
            <div>
                <h1 style={{ textAlign: "center" }}>
                    Help
                    <span style={{ color: "#00bbf0" }}> Us </span>


                </h1>
            </div>

            <div style={{ textAlign: "center" }}>
                <img style={{ height: "100px", }} src="./w1.png" alt="" />
                <h3 >Expert Management</h3>
                <p >Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
            </div>

            <div style={{ textAlign: "center" }}>
                <img style={{ height: "100px", }} src="./w2.png" alt="" />
                <h3 >Secure Investment</h3>
                <p >Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
            </div>

            <div style={{ textAlign: "center" }}>
                <img style={{ height: "100px", }} src="./w3.png" alt="" />
                <h3 >Instant Trading</h3>
                <p >Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
            </div>

            <div style={{ textAlign: "center" }}>
                <img style={{ height: "100px", }} src="./w4.png" alt="" />
                <h3 >Happy Customers</h3>
                <p >Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus</p>
            </div>

            <div style={{ textAlign: "center" }}>
                <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none", cursor: "pointer" }}>Read More</button>
            </div>
        </div>
    )


}
export default Help;