import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container" style={{marginTop: "35px",}}>
                <div className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                    <div className="pb-2 pb-lg-1">
                        <h2 className="fw-bold mb-2">Hi, welcome to MERN Stack</h2>
                        <p className="mb-0">It represents development with MongoDb, ExpressJS, ReactJS, NodeJS.</p>
                    </div>
                    <div className="my-2"><i className="icon-energy" style={{fontSize: "55px",}}></i></div>
                </div>
            </div>
        </div>
    )
}

export default Home