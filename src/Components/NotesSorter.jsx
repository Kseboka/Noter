import { useState } from 'react'

const NotesSorter = ({ passSort }) => {
  const [selectedSort, setSelectedSort] = useState('Descending')

  const handleSelected = (e) => {
    const { value } = e.target

    setSelectedSort(value)
    passSort(selectedSort)

    console.log(selectedSort)
  }

  return (
    <div className='note-sorter'>
      <div className='note-sorter-form '>
        <label htmlFor=''>Sort by Date</label>
        <select value={selectedSort} onChange={handleSelected}>
          <option value='Descending'>Descending</option>
          <option value='Ascending'>Ascending</option>
        </select>
      </div>
    </div>
  )
}

export default NotesSorter
