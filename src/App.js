import { useState, useEffect } from 'react'
import Header from './Components/Header'
import NoteInput from './Components/NoteInput'
import NotesSorter from './Components/NotesSorter'
import NotesList from './Components/NotesList'
import './App.css'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [sortSelection, setSortSelection] = useState('')
  const [updateNote, setUpdateNote] = useState({})
  const [isEdit, setIsEdit] = useState(true)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote])
  }

  const deleteNote = (deleteNote) => {
    setNotes((notes) => {
      return notes.filter((note) => {
        return note.id !== deleteNote
      })
    })
  }

  const editNote = (editNote) => {
    setIsEdit(true)

    const abc = notes.filter((note) => {
      return note.id === editNote
    })

    setUpdateNote(() => {
      const [newEdit] = abc
      return newEdit
    })
    deleteNote(editNote)
  }

  const selectedSort = (selected) => {
    setSortSelection(selected)
  }

  return (
    <div className='App'>
      <Header />
      <NoteInput addNote={addNote} updateNote={updateNote} isEdit={isEdit} setIsEdit={setIsEdit} />
      <NotesSorter passSort={selectedSort} />
      <NotesList notes={notes} deleteNote={deleteNote} sortSelection={sortSelection} editNote={editNote} />
    </div>
  )
}

export default App
