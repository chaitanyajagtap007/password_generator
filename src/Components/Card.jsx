import React from 'react'

export default function Card(props){
    return (
        <>
            {/* <div classNameName="col-3 mt-4">
                <div className="card ">
                    <img className="card-img-top w-100" src={props.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.desc}</p>
                            <a href="#" className="btn btn-primary">{props.btn}</a>
                        </div>
                </div>
            </div> */}

            <div className="col-3 mt-4">
                <div className="card">
                    <div className="card-header P-0 border">
                    <img className="w-100" style={{height:'230px'}} src={props.img} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.name}</h5>
                        <p className="card-text text-justify">{props.desc}</p>
                    </div>
                    <div className="card-hefooterader text-center mb-3">
                        <button className='btn btn-primary  '>{props.btn}</button>
                    </div>
                </div>
            </div>
        </>


    )
}
