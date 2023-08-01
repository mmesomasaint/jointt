import { MdClose } from 'react-icons/md'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import Modal from '../../components/modal'

export default function ActivatePrompt({
  handleClose,
  handleActivate,
}: {
  handleClose: () => void
  handleActivate: () => void
}) {
  return (
    <Modal>
      <div className='rounded-xl p-7 bg-white relative w-[50%] text-black flex flex-col gap-2 items-center justify-start'>
        <div className='absolute top-2 right-2 w-fit' onClick={handleClose}>
          <MdClose className='text-blue-600 text-xl' />
        </div>
        <Text size='BOLD'>Activate!</Text>
        <Text size='SMALL'>You need to activate your career first.</Text>
        <Button
          type='button'
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
          onClick={handleActivate}
        >
          Proceed to activate
        </Button>
      </div>
    </Modal>
  )
}
