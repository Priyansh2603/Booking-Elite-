import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
// import { collection, getDocs, addDoc } from 'firebase/firestore'
// import { db } from "../components/Main/firebase-config";
import { Link } from 'react-router-dom';

const Hello = () => {
    const { value } = useParams();
    // console.log(value); 

    // const useCollection = collection(db, 'users-1')
    // const [users, setUser] = useState([])
    // React.useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(useCollection);
    //         console.log(data)
    //         console.log(data.docs)
    //         setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     }
    //     getUsers();
    //     // find();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // const find = () => {
    //     // eslint-disable-next-line no-lone-blocks
    //     {
    //         users.map((user) => {
    //             if (user.Property === value) {
    //                 return (
    //                     <>
    //                         <h1>Google</h1>
    //                     </>
    //                 )
    //             }
    //         })
    //     }
    // }

return (
    <h1>
        Hello {value}
    </h1>
)
}

export default Hello;