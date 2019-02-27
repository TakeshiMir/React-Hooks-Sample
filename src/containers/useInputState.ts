import { useState } from 'react'

export default () => {
  const [value, setValue] = useState('')

  type EventType = React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
  return {
    onChange: (event: EventType) => {
      setValue(event.target.value)
    },
    reset: () => setValue(''),
    value
  }
}
