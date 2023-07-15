import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Ai pessoal, vocês já viram o novo chatbot do google, um tal de bart??🤨😮',
    'a tecnologia dominou o mundo!',
    'React é realmente incrível!🤗🤩'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets]) // copia o antigo array e adiciona o novo item
    setNewTweet('')
  }

  function handleHotkeysubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      < Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/EderJrDev.png" alt="Eder Jr" />
          <textarea
            id="tweet"
            onKeyDown={handleHotkeysubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
            value={newTweet}
            placeholder="What's happening?"
          />
        </label>
        <button type='submit' >Tweet</button>
      </form>

      <Separator />

      {
        tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })
      }
    </main>
  )
}