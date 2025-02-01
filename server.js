import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  console.log('GET /')
  res.json({ msg: 'hi' })
})

app.listen(PORT, () => console.log(`app listen in port:${PORT}`))