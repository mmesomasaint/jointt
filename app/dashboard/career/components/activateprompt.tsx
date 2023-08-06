import Text from '@/app/components/text'
import Button from '@/app/components/button'

export default function ActivatePrompt({
  handleActivate,
}: {
  handleActivate: () => void
}) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <Text size='SMALL'>You must activate your career profile first.</Text>
      <Button type='button' onClick={handleActivate}>
        Activate Now!
      </Button>
    </div>
  )
}
