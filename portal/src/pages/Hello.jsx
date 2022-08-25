import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../components/Main/firebase-config";
import { Link } from 'react-router-dom';
// import "./output.css"
// import "./Page2/output.css"
let name=["Hey","Hi","Hello"];
// const Name = name.map((i)=>{
//     console.log(i)
//     return (<>
//         <h1>Hindustan Institute of {i}</h1>
//         <h3>Address:- Coimbatore, Tamilnadu</h3>
//         <h3>Contact:- 1234515544</h3>
//             {/* <button onClick={redirect} className="btn btn-info btn-lg ms-2">Go to Location</button> */}
//             {/* <button onClick={cabredirect} className="btn btn-warning btn-lg ms-2">Cab Service</button> */}
//             </>
//         )
// })
const Hello = () => {
    const { value } = useParams();
    // console.log(value); 

    const useCollection = collection(db, 'users-1')
    const [users, setUser] = useState([])
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
                    return(
                        <h1>Contact : {user.Contact}</h1>
                    )
                    // name.map((i)=>{
                    // return (<>
                    //     <h1>Hindustan Institute of {name}</h1>
                    //     <h3>Address:- Coimbatore, Tamilnadu</h3>
                    //     <h3>Contact:- 1234515544</h3>
                    //         {/* <button onClick={redirect} className="btn btn-info btn-lg ms-2">Go to Location</button> */}
                    //         {/* <button onClick={cabredirect} className="btn btn-warning btn-lg ms-2">Cab Service</button> */}
                    //         </>
                    //     )}
                    // )
                //    document.getElementById('printC').innerHTML=name
            
                }
            })
            var Lift;
            const Name = users.map((i)=>{
    // console.log(i)
    if(i.Property===value){
        if(i.Lift===""){
            Lift = "Unavailable";
        }
        else{
            Lift= "available";
        }
    return (<>
        <h1>{i.Property_Name}</h1>
        <h3>{i.Address}</h3>
        <h3>{i.Contact}</h3>
           
            <section>
   
    
    <div>
        <h1><span id="property_type1"></span></h1>
        <h2><span id="property_type2"></span></h2>
        <table>
          <thread>
          <tr>
            <th>        <h3>
          {/* <button onClick="Go_To_Location()">Go To Location </button> */}
        </h3></th>
        <th>
          <h3>
            {/* <button onClick="cab_ola()">Cab Service</button> */}
          </h3>
        </th>
        </tr>
      </thread>
      </table>
        

   
    </div>

    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th>Facility(सुविधा)</th>
            <th>Availibility(उपलब्धता)</th>
            <th>Accessibility(उपयोगिता)</th>
            <th>Reference(लाभ उठाने के लिए)</th>
           
          </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          <tr>
            <td>Lift</td>
            <td id='f1'></td>
            <td id="A1">
              
            </td>
            <td>
            <a onClick="link1()" id="vid1"></a>
            </td>
          </tr>
          <tr>
            <td>Ramp</td>
            <td id='f2'></td>
            <td id="A2">
              
            </td>
            <td>
            <a onClick="link2()" id="vid2"></a>
            </td>
          </tr>
          <tr>
            <td>WheelChair</td>
            <td id='f3'></td>
            <td id="A3">
              
            </td>
            <td>
            <a onClick="link3()" id="vid3"></a>
            </td>
          </tr>
          <tr>
            <td>WashRoom</td>
            <td id='f4'></td>
            <td id="A4">
              
            </td>
            <td>
            <a onClick="link4()" id="vid4"></a>
            </td>
          </tr>
          <tr>
            <td>Braille Synage</td>
            <td id='f5'></td>
            <td id="A5">
              
            </td>
            <td>
            <a onClick="link5()" id="vid5"></a>
            </td>
          </tr>
          
        </tbody>
      </table>
      
    </div>
    <button className="btn btn-info btn-lg ms-2"><a href={`http://maps.google.com/?q=${i.Address}`} target="_blank">Go to Location</a></button>
            <button className="btn btn-warning btn-lg ms-2"><a href={`https://book.olacabs.com/?serviceType=p2p&when=NOW&utm_source=widget_on_olacabs&pickup_name=Current%20Location&drop_lat=10.8945458&drop_lng=76.9970671&drop_name="${i.Address}"&pickup=current_location`} target="_blank">Cab Service</a></button>
  </section>
            </>
        )
    }
})
            console.log(name)
            //  function redirect(){
            //     window.open("http://maps.google.com/?q="+name)
            // }
            //  function cabredirect(){
            //     // window.open("http://maps.google.com/?q="+name)
            //     window.open("https://book.olacabs.com/?serviceType=p2p&when=NOW&utm_source=widget_on_olacabs&pickup_name=Current%20Location&drop_lat=10.8945458&drop_lng=76.9970671&drop_name="+name+"&pickup=current_location") 
            // }
        // }
    // }


return (<>
{/* <h1>Hindustan Institute of {}</h1>
<h3>Address:- Coimbatore, Tamilnadu</h3>
<h3>Contact:- 1234515544</h3> */}
    {/* <button className="btn btn-info btn-lg ms-2">Go to Location</button>
    <button className="btn btn-warning btn-lg ms-2">Cab Service</button> */}
    {/* <Name ></Name> */}
    {Name}
    </>
)
}


export default Hello;