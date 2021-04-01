import React from 'react'
//import logo from './logo2.png'
export default function Card() {

    return (

        <div className="col-ms-6">
             <div className="card">
                <img 
                    width= "170"
                    height="170"
                    src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
                    alt="citron"
                />
                 <div className="card-body">
                <div className="row">
                    <div className="col-ms-6">
                        <h4> Citron</h4>
                    </div>
                    <div className="col-ms-6">
                        <p>20 dt</p>
                        <button className="btn btn-warning btn-sm"> view product</button>
                    </div>
                </div>
             </div>

            </div>
            {/* modal */}
        </div>
    )
}
