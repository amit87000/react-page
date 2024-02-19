import React from "react";
import Button from "../../components/Button/Button";
import List from '../../components/List/List';
import Heading from "../../components/Heading/Heading";


const Home = () => {
    return (
        <div>
            <div style={{ padding: "30px", display: "flex", backgroundColor: '#6f42c1' }}>
                <div>
                    <h1 style={{}}>CRYPTO CURRENCY</h1>
                    <p style={{ width: "85%", color: "white" }}>
                        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none", cursor: "pointer" }}>Read More</button>

                </div>
                <img style={{ height: "500px"}} src="./slider-img.png" alt="no image" />

            </div>


            <div style={{ margin: "30px" }}>
                <div>
                    <h1 style={{ textAlign: "center" }}>Our
                        <span style={{ color: "#00bbf0" }}> Services </span>
                    </h1>
                    <p style={{ textAlign: "center" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <div className="card" style={{ backgroundColor: "#f8f8f9", width: "30%", padding: "10px", textAlign: "center" }}>
                        <img style={{ width: "100px", justifyContent: "center" }} src="./s1.png" alt="" />
                        <h3 >CURRENCY WALLET</h3>
                        <p >fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                    </div>

                    <div className="card1" style={{ backgroundColor: "#f8f8f9", width: "30%", padding: "10px", textAlign: "center" }}>
                        <img style={{ width: "100px" }} src="./s2.png" alt="" />
                        <h3 >SECURITY STORAGE</h3>
                        <p >fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>

                    </div>

                    <div className="card2" style={{ backgroundColor: "#f8f8f9", width: "30%", padding: "10px", textAlign: "center" }}>
                        <img style={{ width: "100px" }} src="./s3.png" alt="" />
                        <h3 >EXPERT STORAGE</h3>
                        <p> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>

                    </div>

                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none", width: "10%", cursor: "pointer" }}>View All</button>
                </div>
            </div>



            <div style={{ padding: "30px", backgroundColor: "#00204a", color: "white" }} >
                <div>
                    <h3 style={{ textAlign: "center" }}>
                        About Us
                    </h3>
                    <p style={{ textAlign: "center" }}>
                        Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
                    </p>
                </div>

                <div style={{ display: "flex" }}>
                    <img style={{ height: "500px" }} src="./about-img.png" alt="" />

                    <div>
                        <h2>We Are Finaxo</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none", cursor: "pointer" }}>Read More</button>
                    </div>
                </div>

            </div>



            <div style={{ margin: "30px", backgroundColor: "" }}>
                <div>
                    <h1 style={{ textAlign: "center" }}>
                        Why Choose
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




        </div>


    )

}
export default Home;