import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Alert from '@mui/material/Alert'
import '../App.css'

const NoteInput = ({ addNote, edittableNote, editNoteInput, isEdit, setIsEdit }) => {
    const [noteInput, setNoteInput] = useState({
        id: NaN,
        title: '',
        content: '',
        created: Date.now(),
    })
    const [inputError, setInputError] = useState(false)
    const [updateInput, setUpdateInput] = useState(edittableNote)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (isEdit) {
            console.log('hello')
            setNoteInput({ ...updateInput })
        }

        setIsEdit(false)

        setInputError(false)

        setNoteInput((pre) => {
            return {
                ...pre,
                id: uuidv4(),
                created: Date.now(),
                [name]: value,
            }
        })
    }

    const handleInputSubmit = (e) => {
        if (!title || !content) {
            setInputError(true)
        }

        if (title && content) {
            addNote(noteInput)

            setNoteInput({
                id: NaN,
                title: '',
                content: '',
            })
        }
        e.preventDefault()
    }

    const { title, content } = noteInput
    return (
        <div className='note-input-field'>
            <form className='note-input-card'>
                <input onChange={handleInputChange} type='text' name='title' placeholder='Title' value={isEdit ? edittableNote.title : title} />
                <textarea onChange={handleInputChange} cols='30' rows='5' name='content' placeholder='Take a note...' value={isEdit ? edittableNote.content : content} />
                {inputError && (
                    <Alert severity='error' variant='filled' className='Button'>
                        Error Alert! - Missing 'Title' or 'Body'
                    </Alert>
                )}
                <Button onClick={handleInputSubmit} style={{ color: '#E45826', borderColor: '#E45826' }} variant='outlined'>
                    <AddIcon />
                </Button>
            </form>
        </div>
    )
}

export default NoteInput

// edittableNote.content ? edittableNote.content :
// edittableNote.title ? edittableNote.title :
