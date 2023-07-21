import { useState } from "react";
import Text from "@/app/components/text";

export default function Host() {
  const [eventname, setEventName] = useState('')
  const [eventtype, setEventType] = useState('')

  return (
    <div>
      <Text size="SMALL">Host an event</Text>
      <Text size='BOLD'>CHOOSE EVENT TYPE</Text>
        <label htmlFor='eventtype'>
          <Text size="SMALL">Event Name</Text>
          <input
            onChange={(e) => setEventName(e.target.value)}
            required
            type='eventname'
            name='eventname'
            id='eventname'
            value={eventname}
            placeholder="Dora's Dedication"
            className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
          />
        </label>
        <label htmlFor='eventtype'>
          <Text size="SMALL">Event Type</Text>
          <input
            onChange={(e) => setEventType(e.target.value)}
            required
            type='eventtype'
            name='eventtype'
            id='eventtype'
            value={eventtype}
            placeholder='Party'
            className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
          />
        </label>
    </div>
  )
}