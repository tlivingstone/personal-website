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
                    document my learnings on my 
                    <span id = "bolder"> writing </span>
                    blog, design &amp; build out 
                    <span id = "bolder"> product </span> 
                    ideas, and grow communities in SF &amp; beyond.
                </p>
                <img src = "/ocean.jpg" alt = "pic of ocean"/>
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
