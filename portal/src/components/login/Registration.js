import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { db } from '../Main/firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore'
function App() {
  const [users, setUser] = useState([])
  const [newName, setnewName] = useState("")
  const [newPropname, setnewPropname] = useState("")
  const [newContact, setnewContact] = useState(0)
  const [newEmg, setnewEmg] = useState(0)
  const [newProperty, setnewProperty] = useState("")
  const [newAddress, setnewAddress] = useState("")
  const [newPin, setnewPin] = useState("")
  const [newLift, setnewLift] = useState("")
  const [newRamp, setnewRamp] = useState("")
  const [newImage, setnewImage] =useState([])
  const [newWashroom, setnewWashroom] = useState("")
  const [newWheelchair, setnewWheelchair] = useState("")
  const [newSignage, setnewSignage] = useState("")
  const useCollection = collection(db, 'users-1')
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(useCollection);
      console.log(data)
      console.log(data.docs)
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [])
  const playVideo = () => {
    window.open("https://youtu.be/Ax-CpgAbVLM")
  }
  const location = () => {
    {
      users.map((user) => {
        if (user.Property === "School") {
          var name = user.Address;
          window.open("http://maps.google.com/?q=" + name)
        }
      })
    }
  }
  const craeteUser = async () => {
    if (newName == "" || newPropname == "" || newContact == '' || newProperty == "" || newAddress == "" || newPin == "") {
      alert("Please Fill The required fiels!")
    }
    else {
      await addDoc(useCollection, { Name: newName, Property_Name: newPropname, Contact: newContact,Emergency: newEmg, Property: newProperty, Address: newAddress, Pincode: newPin, Lift: newLift, Ramp: newRamp, Washroom: newWashroom, Wheelchair: newWheelchair, Braille_Signage: newSignage, Lift_Img: newImage });
      alert("You've Registered your property successfully");
    }
  }
  console.log(newLift)
  return (
    <div className="App">

      <form method='POST' className='items-center'>
        <div className="h-100 bg-dark" id="Registration">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img className='img-fluid' src='img/reg.jpg' />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h2 className="mb-2 text-uppercase">Owner's Registration Form</h2>
                        {/* <h6 className="mb-4 ">Curious which components explicitly require our JavaScript and Popper? Click the show components link below. </h6> */}
                        <div className="row">
                          <div className="form-outline mb-4">
                            <div className="form-outline">
                              <input type='text' name='Name' className="form-control form-control-lg items-center" onChange={(event) => {
                                setnewName(event.target.value)
                              }} placeholder='Name' required />

                            </div>
                          </div>
                          <div className="form-outline mb-4">
                            <div className="form-outline">
                              <input type="text" id="form3Example1n" onChange={(event) => {
                                setnewPropname(event.target.value)
                              }} className="form-control form-control-lg" placeholder='Property Name' />

                            </div>
                          </div>
                        </div>



                        <div className="form-outline mb-4">
                          <input type='number' name='Age' className="form-control form-control-lg" onChange={(event) => {
                            setnewContact(event.target.value)
                          }} placeholder='Contact No.' />
                        </div>
                        <div className="form-outline mb-4">
                          <input type='number' name='Age' className="form-control form-control-lg" onChange={(event) => {
                            setnewEmg(event.target.value)
                          }} placeholder='Emergency Contact' />
                        </div>



                        <div className="row">
                          <div className="form-outline mb-4">

                            <select name='College' className="form-control form-control-lg" onChange={(event) => {
                              setnewProperty(event.target.value)
                            }} >
                              <option>Select</option>
                              <option value='Mall'>Mall</option>
                              <option value='Shopping Complex'>Shopping Complex</option>
                              <option value='School'>School/College</option>
                              <option value='Hotel'>Hotel</option>
                              <option value='Society'>Society</option>
                            </select>

                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input type='text' name='Address' className="form-control form-control-lg" onChange={(event) => {
                            setnewAddress(event.target.value)
                          }} placeholder='Enter Address...' />
                        </div>

                        <div className="form-outline mb-4">
                          <input type="number" id="form3Example90" onChange={(event) => {
                            setnewPin(event.target.value)
                          }} className="form-control form-control-lg" placeholder='Pincode' />

                        </div>
                        <h5>Upload the video links for corresponding facility if available (You can take help) </h5>
                        <div className="form-outline mb-4">
                          <input type='link' name='Link' className="form-control form-control-lg" onChange={(event) => {
                            setnewLift(event.target.value)
                          }} placeholder='Youtube Link for Lift' />
                        </div>
                        <div className="form-outline mb-4">
                          <input type='link' name='Link' className="form-control form-control-lg" onChange={(event) => {
                            setnewRamp(event.target.value)
                          }} placeholder='Youtube Link for Ramps' />
                        </div>
                        <div className="form-outline mb-4">
                          <label className='m-4'>Upload Image</label>
                        <input class="file-upload-input ml-8" type="file" accept="Image/" onChange={(event) => { setnewImage(event.target.value) }}/>
                        </div>
                        <div className="form-outline mb-4">
                          <input type='link' name='Link' className="form-control form-control-lg" onChange={(event) => {
                            setnewWashroom(event.target.value)
                          }} placeholder='Youtube Link for Washroom' />
                        </div>
                        <div className="form-outline mb-4">
                          <input type='link' name='Link' className="form-control form-control-lg" onChange={(event) => {
                            setnewWheelchair(event.target.value)
                          }} placeholder='Youtube Link for WheelChair ' />
                        </div>
                        <div className="form-outline mb-4">
                          <input type='link' name='Link' className="form-control form-control-lg" onChange={(event) => {
                            setnewSignage(event.target.value)
                          }} placeholder='Youtube Link for Braille Signage ' />
                        </div>


                        <div className="d-flex justify-content-end pt-3">
                          <button onClick={playVideo} className="btn btn-info btn-lg ms-2">Help</button>
                          <button type="reset" className="btn btn-secondary btn-lg ms-2">Reset all</button>
                          <button type='reset' onClick={craeteUser} className="btn btn-warning btn-lg ms-2">Submit form</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* {users.map((user)=>{
        return(<div><h2>
          Name: {user.Name}</h2>
          <h2>Age: {user.Age}</h2>
          <h2>Property: {user.Property}
          </h2>
          <h2>Address: {user.Address}</h2></div>)
      })} */}
        {/* <button type='reset' onClick={location}>Go to Location</button> */}
      </form>
    </div>
  );
}

export default App;
