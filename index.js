const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./loggerMiddleware')

const PORT = 3001

app.use(cors())
app.use(express.json())
app.use(logger)

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

app.get('/', (req, res) => {
  res.send('<h1>Express server</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params
  const note = notes.find(item => item.id === Number(id))

  note
    ? res.json(note)
    : res.status(404).json({ message: 'Invalid id', error: '404 not found' })
})

app.post('/api/notes', (req, res) => {
  const { content, important } = req.body

  if (!content) res.status(400).json({ error: 'content is missing' })

  const newNote = {
    id: notes.length + 1,
    content,
    important: important || false,
    date: new Date().toISOString(),
  }

  notes = [...notes, newNote]

  res.status(201).json(newNote)
})

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params
  notes = notes.filter(note => note.id !== Number(id))
  res.status(204).end()
})

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
