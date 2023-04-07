import React, { useEffect, useState } from 'react'




export function ProductStore() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://geektrust/catalogue")
            .then((res) => {
                console.log(res.json());
            })
            .catch((err) => {
                console.log(err);
            });
        
    }, []);
    return (
        <div>
            <h1>Users Data</h1>
            <div className='container'>
                <div className='row my-2 mx-2'>
                    {users.map((x) => (
                        <div className='col-md-4' key={x.id}>
                            <div className='card'>
                            <img src={x.imageURL} className="card-img-top"></img>
                                <div className='card-body'>
                            <h5 className='card-title'>{x.id}</h5>
                            <p className='card-text'>{x.name}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}