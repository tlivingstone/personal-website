import { useState } from "react";

export default function Index() {
    const [tab, setTab] = useState("about");

    return (
        <>
        <div id = "container">
            <div id = "top-section">
                <h1>Taryn Livingstone</h1>
                <p>
                    VC by day, hacker by night. I lead founder fellowship programs at 
                    <span id = "bolder"> Soma Capital</span> and
                    <span id = "bolder"> Envision Accelerator</span>, 
                    document my learnings through writing, design &amp; build out 
                    product ideas, and grow communities in SF &amp; beyond.
                </p>
                {/* <img src = "/ocean.jpg" alt = "pic of ocean"/> */}
                <hr></hr>

                <p>
                    👋 
                    <a href = "https://twitter.com/wetarynitup"> Twitter</a>, 
                    <a href = "https://www.linkedin.com/in/taryn-e-livingstone/"> LinkedIn</a><br></br>
                    🖊 
                    <a href = "https://tarynitup.substack.com/"> Substack</a>,
                    <a href = "https://medium.com/@t-liv"> Medium</a><br></br>
                    🛠 
                    <a href = "http://www.prodolab.com/"> Prödo Lab</a><br></br>
                    💭 
                    <a href = "https://tarynl.notion.site/Taryn-Labs-88b4495ce25641ffbff971a7070c3afc"> Taryn Labs</a><br></br>
                </p>
            </div>
            {/* <div id = "tab-section">
            <button className = "tab" onClick={() => setTab("about")}>About</button>
                <button className = "tab" onClick={() => setTab("products")}>Products</button>
                <button className = "tab" onClick={() => setTab("writing")}>Writing</button>
                {(tab === "about") ? (
                    <p>
                        about me
                    </p>
                ) : (tab === "products") ? (
                    <p>
                        prods
                    </p>
                ) : (
                    <p>
                        writing
                    </p>
                )}
            </div> */}

        </div>
        </>
    );
}
