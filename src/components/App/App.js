import Link from '../Link/Link.js'
import Paragraph from '../Paragraph/Paragraph.js'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1 id='top'>Hello world</h1>
      <Paragraph children='This is my new site content.' />
      <Paragraph onClick={() => alert('clicked!')}>This is my pink site content.</Paragraph>
      <Link href='#top'>to here.</Link>
    </div>
  )
}

export default App
