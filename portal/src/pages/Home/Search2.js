import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import { BrowseRouter, Routes, Route } from 'react-dom'
// import { db } from "../../components/Main/firebase-config";
// // import Nav from './Nav';
// import { collection, getDocs, addDoc } from '@firebase/firestore'
// import Output from './Output';
import { Link } from 'react-router-dom';


export default function Search() {
  // const useCollection = collection(db, 'users-1')
  // const [users, setUser] = useState([])
  const [search, setSearch] = useState('')


  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(useCollection);
  //     console.log(data)
  //     console.log(data.docs)
  //     setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   }
  //   getUsers();
  // }, [])

  // const find = () => {
  //   {
  //     users.map((user) => {

  //       if (user.Property === search) {
  //         console.log(user.Address)
  //         return (

  //         )
  //       }
  //     })
  //   }
  // }

  return (
    <div className='border my-4 rounded' >
      <form action="backend.php" className="rounded m-4" method="post">
        <div class="container px-5 py-24 mx-auto opacity-80 rounded  flex" style={{ backgroundColor: "#5cb874" }}>
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 px-5 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 text-center font-medium title-font">Find Your Destination</h2>

            <div className="row">
              <div className="form-outline mb-4">
                <label></label>
                <select className="form-control text-gray form-control-lg w-60" onChange={(event) => {
                  setSearch(event.target.value)
                }} >
                  <option>Select Property Type</option>
                  <option value='Mall'>Mall</option>
                  <option value='Shopping Complex'>Shopping&nbsp;Complex</option>
                  <option value='School'>School & College</option>
                  <option value='Hotel'>Hotel</option>
                  <option value='Society'>Society</option>
                </select>

              </div>
            </div>

            {/* <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-black mr-4"></label>
       Gender :    Male <input name="Gender" type="radio"/>    Female <input name="Gender" type="radio" />    Other <input name="Gender" type="radio" />
      </div> */}

            <div className='text-center'><a ><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M5.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-2.022a5.5 5.5 0 0 0 5-5.478a.5.5 0 0 0-1 0a4.5 4.5 0 1 1-9 0Zm7.5 0a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v5Z" /></svg></a>
              <p mb-4>Use voice</p></div>

            <div className='text-center'>
              <Link to={`/searchplaces/${search}`}>
                <button className="btn text-center btn-lg me-2 mb-4" style={{ backgroundColor: "#5cb874" }}>See Available Places</button>
              </Link>
            </div>
          </div>

        </div>
      </form>

    </div>
  )
}
