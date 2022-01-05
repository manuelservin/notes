import React from 'react'
import NotesList from '../notes/NotesList'
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import styled from "styled-components"


const Home = () => {
    useFirestoreConnect([{ collection: 'notes', orderBy: ['createdAt', 'desc'] }])
    const notes = useSelector((state) => state.firestore.ordered.notes);
    console.log('home', notes)
    return (
       
           
            <>
                <div><NotesList notes={notes} /></div>
          

        </>
    )
}



export default Home
