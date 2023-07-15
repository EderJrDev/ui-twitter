import { useState, FormEvent, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Chat GPT é melhor...',
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers]) // copia o antigo array e adiciona o novo item
    setNewAnswer('')
  }

  function handleHotkeysubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      < Header title='Tweet' />
      <Tweet content="Ai pessoal, vocês já viram o novo chatbot do google, um tal de bart??🤨😮" />
      <Separator />
      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/EderJrDev.png" alt="Eder Jr" />
          <textarea
            id="tweet"
            value={(newAnswer)}
            onKeyDown={handleHotkeysubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            placeholder="Tweet your answer"
          />
        </label>
        <button type='submit' >
          < PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>


      {
        answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })
      }
    </main>
  )
}