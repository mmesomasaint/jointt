import { useState } from 'react'

type ErrorMessageType = {
  message: string
  onClose: () => void
}

const ErrorMessage = ({ message, onClose }: ErrorMessageType) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    onClose()
  }

  return isVisible ? (
    <div className='fixed top-0 left-0 w-full flex justify-center px-4 py-2 z-50'>
      <div className='bg-red-500 text-white px-4 py-2 rounded shadow-md flex items-center'>
        <span className='mr-2'>{message}</span>
        <button className='text-white font-bold' onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  ) : null
}

const useErrorHandler = () => {
  const [errors, setErrors] = useState<any[]>([])

  const closeError = (i: number) => {
    setErrors((prevErrors: number[]) =>
      prevErrors.filter((_, id: number) => i !== id)
    )
  }

  const addError = (msg: string) =>
    setErrors((prevErrors) => [...prevErrors, msg])

  const Errors = () => (
    <>
      {errors.map((msg: string, id: number) => (
        <ErrorMessage message={msg} onClose={() => closeError(id)} />
      ))}
    </>
  )
  return { errors, addError, Errors }
}

export default useErrorHandler
