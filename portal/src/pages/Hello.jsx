import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../components/Main/firebase-config";
import { Link } from 'react-router-dom';
let name=[];

const Hello = () => {
    const { value } = useParams();
    // console.log(value); 

    const useCollection = collection(db, 'users-1')
    const [users, setUser] = useState([])
    const [address, setAddress] = useState([])
    React.useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(useCollection);
            console.log(data)
            console.log(data.docs)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();
        // find();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const find = () => {
    //     // eslint-disable-next-line no-lone-blocks
        // {
            
            name=[];
            // let array = [];
            users.map((user) => {
                if (user.Property === value) {
                    console.log(user.Name)
                    name.push(user.Address);


                //    document.getElementById('printC').innerHTML=name
            
                }
            })
            // console.log((name)
            setAddress(name)
             function redirect(){
                window.open("http://maps.google.com/?q="+name)
            }
             function cabredirect(){
                // window.open("http://maps.google.com/?q="+name)
                window.open("https://book.olacabs.com/?serviceType=p2p&when=NOW&utm_source=widget_on_olacabs&pickup_name=Current%20Location&drop_lat=10.8945458&drop_lng=76.9970671&drop_name="+name+"&pickup=current_location") 
            }
        // }
    // }


return (<>
<h1>Hindustan Institute of {}</h1>
<h3>Address:- Coimbatore, Tamilnadu</h3>
<h3>Contact:- 1234515544</h3>
    <button onClick={redirect} className="btn btn-info btn-lg ms-2">Go to Location</button>
    <button onClick={cabredirect} className="btn btn-warning btn-lg ms-2">Cab Service</button>
    {/* <Name ></Name> */}
    {address.map((i)=>{
                console.log(i)
                return (<>
                    <h1>Hindustan Institute of {i}</h1>
                    <h3>Address:- Coimbatore, Tamilnadu</h3>
                    <h3>Contact:- 1234515544</h3>
                        {/* <button onClick={redirect} className="btn btn-info btn-lg ms-2">Go to Location</button> */}
                        {/* <button onClick={cabredirect} className="btn btn-warning btn-lg ms-2">Cab Service</button> */}
                        </>
                    )
            })}
    </>
)
}


export default Hello;