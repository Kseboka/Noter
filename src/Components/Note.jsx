import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ReactMarkdown from 'react-markdown'

const Note = ({ id, title, content, deleteNote, editNote, createdDate }) => {
  return (
    <div className='note-card'>
      <h3>{title}</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
      <small>
        Created:{' '}
        {new Date(createdDate).toLocaleDateString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}{' '}
      </small>
      <Button onClick={() => editNote(id)} style={{ color: '#E45826', borderColor: '#E45826', marginBottom: '.5rem' }} variant='outlined'>
        <EditIcon />
      </Button>
      <Button onClick={() => deleteNote(id)} style={{ background: '#E45826', borderColor: '#E45826' }} variant='contained'>
        <DeleteIcon />
      </Button>
    </div>
  )
}

export default Note
