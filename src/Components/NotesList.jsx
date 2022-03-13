import Note from './Note'
import { motion, AnimatePresence } from 'framer-motion'

const NotesList = ({ notes, deleteNote, editNote, sortSelection }) => {
    if (sortSelection === 'Descending') {
        var descendingNotes = notes.sort((a, b) => a.created - b.created)
    } else {
        var ascendingNotes = notes.sort((a, b) => b.created - a.created)
    }
    return (
        <div className='note-list'>
            <AnimatePresence>
                {sortSelection === 'Descending'
                    ? descendingNotes.map((note) => {
                          return (
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
                                  <Note id={note.id} key={note.id} title={note.title} content={note.content} deleteNote={deleteNote} editNote={editNote} createdDate={note.created} />
                              </motion.div>
                          )
                      })
                    : ascendingNotes.map((note) => {
                          return (
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}>
                                  <Note id={note.id} key={note.id} title={note.title} content={note.content} deleteNote={deleteNote} editNote={editNote} createdDate={note.created} />
                              </motion.div>
                          )
                      })}
            </AnimatePresence>
        </div>
    )
}

export default NotesList
