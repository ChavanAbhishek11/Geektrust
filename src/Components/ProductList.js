
import React from 'react'
import { useState } from "react"




function ProductList({ product, addToCart }) {
    const [filteredData, setFiltereddata] = useState([]);
    // const [checkData,setCheck] = useState([]);   
    const [query, setQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const filterResult = (catItem) => {
        const result = product.filter((curData) => {
            return curData.color === catItem
          

        });
        setFiltereddata(result);
    };

    return (
        <>


            <form onSubmit={handleSubmit}>
                
                {filteredData.length != 0 && (
                    <div>
                        {filteredData.map((value, key) => {
                            return (
                                <p>{value.name}</p>
                            )
                        })}
                    </div>
                )} 

                <input className='SearchBox' onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search New items"  ></input><span className='searchIcon'><i className="fa fa-search" aria-hidden="true"></i></span></form>
        
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3 ' id="left">
                        
                        <div className="card mb-4 mt-4 text-align-center leftSide ">

                            <h5>Color</h5>

                            <div>
                                <input
                                    type="checkbox"
                                    // onChange={handleCheck}
                                    onChange={() => filterResult("Blue")}
                                    value="Blue"
                                ></input>
                                <label htmlFor="">&nbsp; Blue</label>
                            </div>


                            <div>
                                <input type="checkbox" onClick={() => filterResult("Pink")} value="Pink"></input>
                                <label htmlFor=''>&nbsp; Pink</label>
                            </div>


                            <div>
                                <input type="checkbox" onClick={() => filterResult("Black")} value="Black"></input>
                                <label htmlFor=''>&nbsp; Black</label>
                            </div>

                            <br />
                            <h5>Gender</h5>

                            <div>
                                <input type="checkbox" onClick={() => filterResult("Men")} value="Men"></input>
                                <label htmlFor=''>&nbsp; Men</label>
                            </div>

                            <div>
                                <input type="checkbox" onClick={() => filterResult("Women")} value="Women"></input>
                                <label htmlFor=''>&nbsp; Women</label>
                            </div>

                            <br />

                            <h5>Price</h5>

                            <div>
                                <input type="checkbox" value="Price"></input>
                                <label htmlFor=''>&nbsp;  0 - Rs.251 </label>
                            </div>


                            <div>
                                <input type="checkbox" value="Price"></input>
                                <label htmlFor=''>&nbsp;  Rs.251 - Rs.450 </label>
                            </div>


                            <div>
                                <input type="checkbox" value="Price"></input>
                                <label htmlFor=''>&nbsp;  Rs.450 </label>
                            </div>


                            <br />
                            <h5>Type</h5>
                            

                            <div>
                                <input type="checkbox" onClick={() => filterResult("Polo")} value="Polo"></input>
                                <label htmlFor=''>&nbsp;  Polo </label>
                            </div>



                            <div>
                                <input type="checkbox" value="Hoodie"></input>
                                <label htmlFor=''>&nbsp;  Hoodie </label>
                            </div>




                            <div>
                                <input type="checkbox" value="Basic"></input>
                                <label htmlFor=''>&nbsp;  Basic </label>
                            </div>







                        </div>


                    </div>

                    {/* 2 Column */}
                    <div className='col-md-9'>
                        {/* <h3>Right Side</h3> */}
                        <div className='row'>

                            {product.filter((x) => (x.name.toLowerCase().includes(query) || (x.type.toLowerCase().includes(query)))).map((x, i) => {
                                return (
                                    // <div style={{width:"20%"}}>
                                    <div className='col-md-3 mb-2' key={x.id}>
                                        {/* <div className='product-item'> */}
                                        <div className="card mb-4 mt-4" style={{ width: "100%" }}>

                                            <p className='nameStyle'>{x.name}</p>

                                            <img src={x.imageURL} style={{ objectFit: "contain", width: "100%" }} ></img>
                                            <div className='cardStyle'>



                                                <div className='tile-text text-center'>


                                                    <p className='priceStyle'>Rs. {x.price}</p>
                                                    <button onClick={() => { addToCart(x) }}>Add To Cart</button>
                                                </div>

                                            </div>




                                        </div>
                                    </div>




                                )
                            })}

                        </div>


                    </div>

                </div>




            </div>


        </>

    )

}

export default ProductList;