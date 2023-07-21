'use client'
import { useState } from "react";
import Text from "@/app/components/text";
import Button from "@/app/components/button";

export default function Host() {
  const [eventname, setEventName] = useState('')
  const [eventtype, setEventType] = useState('')

  return (
    <div className="p-3">
      <Text size="SMALL">Host An Event</Text>
      <Text size='BOLD' className="text-center">CHOOSE EVENT TYPE</Text>
        <div className="flex flex-col gap-4 justify-start items-start w-fit mx-auto mt-16"><label htmlFor='eventtype'>
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
        <Button type='button'>Next</Button></div>
    </div>
  )
}