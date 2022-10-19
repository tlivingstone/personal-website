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
                    <a href = "https://www.somacap.com/"><span id = "bolder"> <span className="underline">Soma Capital</span></span></a> and
                    <a href = "https://www.envisionaccelerator.com/"><span id = "bolder"> <span className="underline">Envision Accelerator</span></span></a>, 
                    document my learnings through writing, design &amp; build out 
                    product ideas, and grow communities in SF &amp; beyond.
                </p>
                {/* <img src = "/ocean.jpg" alt = "pic of ocean"/> */}
                <hr></hr>

                <p>
                    👋 
                    <a href = "https://twitter.com/wetarynitup"> <span className="underline">Twitter</span></a>, 
                    <a href = "https://www.linkedin.com/in/taryn-e-livingstone/"> <span className="underline">LinkedIn</span></a><br></br>
                    🖊 
                    <a href = "https://tarynitup.substack.com/"> <span className="underline">Substack</span></a>,
                    <a href = "https://medium.com/@t-liv"> <span className="underline">Medium</span></a><br></br>
                    🛠 
                    <a href = "http://www.prodolab.com/"> <span className="underline">Prödo Lab</span></a><br></br>
                    💭 
                    <a href = "https://tarynl.notion.site/Taryn-Labs-88b4495ce25641ffbff971a7070c3afc"> <span className="underline">Taryn Labs</span></a><br></br>
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
