import React from "react";

const About = () => {
    return (
        <>
         <div style={{ padding: "30px", backgroundColor: "#00204a", color: "white" }} >
                <div>
                    <h3 style={{ textAlign: "center" }}>
                        About Us
                    </h3>
                    <p style={{ textAlign: "center" }}>
                        Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
                    </p>
                </div>

                <div style={{display:"flex"}}>
                    <img style={{ height: "500px" }} src="./about-img.png" alt="" />

                    <div>
                        <h2>We Are Finaxo</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <button style={{padding:"10px", backgroundColor:"#00bbf0", color:"white", border:"none" , cursor:"pointer"}}>Read More</button>
                    </div>
                </div>

            </div>
        </>
    )


}
export default About;   