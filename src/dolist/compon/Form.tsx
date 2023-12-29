import { useEffect, useRef, useState } from 'react'
import addButton from '../.././assets/dolist/plus.svg'
import editButton from '../.././assets/dolist/floppy.svg'

export function TodoForm(props: any) {
  const [input, setInput] = useState(props.edit && props.edit.value)
  const inputRef = useRef<any>(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleChange(e: any) {
    setInput(e.target.value)
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    props.onSubmit({ id: Math.random(), text: input })
    setInput('')
  }

  useEffect(() => {
    inputRef.current.style.height = "inherit"
    inputRef.current.style.height = `${Math.max(inputRef.current.scrollHeight, 8)}px`
  }, [input])

  return <form onSubmit={handleSubmit}>
    {props.edit ? (
      <div className='overlay'>
        <div className='app-column modal'>
          <p>Change A Task?</p>
          <div className='app-respon dolist-box'>
            <div className='form-container-95'>
              <textarea
                placeholder="Change A Task?"
                value={input}
                name="text"
                className='form-95'
                onChange={handleChange}
                ref={inputRef}
                rows={1}
              />
            </div>
            <div className='app-center form-container-5'>
              <button className='form-5'>
                <img src={editButton} alt='Edit' style={{ height: 32, width: 32 }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className='app-respon dolist-box'>
        <div className='form-container-95'>
          <textarea
            placeholder="Add A Task!"
            value={input}
            name="text"
            className='form-95'
            onChange={handleChange}
            ref={inputRef}
            rows={1}
          />
        </div>
        <div className='app-center form-container-5'>
          <button className='form-5'>
            <img src={addButton} alt='Add' style={{ height: 32, width: 32 }} />
          </button>
        </div>
      </div>
    )}
  </form>
}