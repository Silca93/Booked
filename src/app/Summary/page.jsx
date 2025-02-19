'use client'
import React from 'react'
import { BsBookmarkCheckFill } from "react-icons/bs";



export default function Summary() {
    const date = new Date();
    date.setDate(date.getDate() + 5)
    const year = date.getFullYear();
    const month = date.toLocaleString('default', {month: 'long'});
    const day = date.getDate();

    return (
    <div className="w-full flex justify-center items-center">
        <div className="w-[50rem] h-[35rem]  flex justify-center">
            <div className="w-full h-full flex flex-col py-4 items-center">
                <div className="flex w-full h-[10%] bg-[#ebebe2] justify-center items-center gap-3 mt-5">
                    <BsBookmarkCheckFill style={{color:'green', fontSize:'30px'}} />
                    <h1 className="text-3xl font-bold max-[768px]:text-2xl max-[520px]:text-lg">Thank you, your order has been placed.</h1>
                </div>
                <div className="flex w-full h-[90%] bg-[#f5f4f3] flex-col items-center py-5 mb-5">
                    <div className="flex flex-col w-1/2 h-[60%]  gap-3">
                        <p className="text-lg text-start font-bold max-[550px]:text-[13px]"><span>A confirmartion email has been sent to you.</span></p>
                        <p className="text-lg text-start font-bold max-[550px]:text-[13px]">Order number:<span className="font-light"> 120-2354-423245</span></p>
                        <p className="text-lg text-start font-bold max-[550px]:text-[13px]">Delivery address:<span className="font-light"> Pl. de la Minoterie 10, 1080 Molenbeek-Saint-Jean</span> </p>
                        <p className="text-lg text-start font-bold max-[550px]:text-[13px]">Estimated delivery date:<span className="font-light"> {`${day}-${month}-${year}`} </span> </p>
                        
                    </div>
                    <ul className="timeline w-[80%]">
                        <li>
                            <div className="timeline-start timeline-box rounded-sm border-[2px] border-green-300 max-[600px]:w-[5rem] max-[600px]:text-[13px] text-center">Order Placed</div>
                            <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <hr/>
                        </li>
                       
                        <li>
                            <hr/>
                            <div className="timeline-start timeline-box rounded-sm max-[600px]:w-[5rem] max-[600px]:text-[13px] text-center px-2">Processing Order</div>
                            <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-start timeline-box rounded-sm max-[600px]:w-[5rem] max-[600px]:text-sm">Order Shipped</div>
                            <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <hr/>
                        </li>
                        <li>
                            <hr/>
                            <div className="timeline-start timeline-box rounded-sm max-[600px]:w-[5rem] max-[600px]:text-sm px-2 max-">Delivered</div>
                            <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>            
        </div>
    </div>
)
}
