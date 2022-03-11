import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import ReactMarkdown from "react-markdown"
import { motion } from "framer-motion"

const Note = ({ id, title, content, deleteNote, createdDate }) => {
  return (
    <div className='note-card'>
      <h3>{title}</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
      <small>
        Created:{" "}
        {new Date(createdDate).toLocaleDateString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
      </small>
      <Button
        onClick={() => deleteNote(id)}
        style={{ color: "#E45826", borderColor: "#E45826" }}
        variant='outlined'
      >
        <DeleteIcon />
      </Button>
    </div>
  )
}

export default Note
