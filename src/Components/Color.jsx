import React from 'react'
import { useState } from 'react';
export default function Color() {

    let [color, setColor] = useState("pink");
    return (
        <>
            <div className="container-fulid " style={{ backgroundColor: color, height: '700px' }}>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('red')} className="btn text-white" style={{ backgroundColor: 'red'}} >red</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('pink')} className="btn" style={{ backgroundColor: 'pink' }} >Pink</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('blue')} className="btn text-white" style={{ backgroundColor: 'blue' }} >blue</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('orange')} className="btn" style={{ backgroundColor: 'orange', }} >orange</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('indigo')} className="btn text-white" style={{ backgroundColor: 'indigo', }} >indigo</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('yellow')} className="btn" style={{ backgroundColor: 'yellow', }} >yellow</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('gray')} className="btn" style={{ backgroundColor: 'gray', }} >gray</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('purple')} className="btn text-white" style={{ backgroundColor: 'purple', }} >purple</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('violet')} className="btn text-white" style={{ backgroundColor: 'violet', }} >violet</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('cyan')} className="btn" style={{ backgroundColor: 'cyan' }} >cyan</div>
                    </div>
                    <div className="col-1 mt-2">
                        <div onClick={() => setColor('green')} className="btn text-white" style={{ backgroundColor: 'green' }} >green</div>
                    </div>
                    <div className="col-1 mt-2">
                        {/* <div className="btn btn-primary ">Black</div> */}
                        <div onClick={() => setColor('black')} className="btn" style={{ backgroundColor: 'black', color:'white' }} >green</div>
                    </div>

                </nav>
            </div>


        </>
    )
}
