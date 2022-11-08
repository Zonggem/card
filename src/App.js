import React from "react"
import Header from "./Header"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"
export default function App() {
    return (
        <div className="page">
            <Header />
            <div className="body-page">
                <div className="container">
                <About/>
                <Interest/>

                </div>
        
            </div>
            <Footer/>
        </div>
    )
}
