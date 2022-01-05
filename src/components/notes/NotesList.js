import React from 'react'
import Note from './Note'
import styled from "styled-components"
const NotesList = ({ notes }) => {
    return (
        <GridContainer>
            {notes && notes.map(note =>

                <Note note={note} key={note.id}/>

            )}

        </GridContainer>
    )
}

const GridContainer = styled.div`
display: grid;
padding: 20px;
gap: 1rem;
grid-auto-flow: dense;
grid-auto-rows: 22rem;
grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
`;

export default NotesList
