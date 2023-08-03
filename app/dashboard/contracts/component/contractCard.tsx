import Text from "@/app/components/text";

export default function ContractCard() {
  return (
    <div className="bg-gray-600/10 border border-gray-600/50 shadow-xl p-5 rounded-xl">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center gap-10">
          <div className="flex justify-start items-center gap-2">
            <Text size="SMALL">Host:</Text>
            <Text size="SMALL">Dr. Amadi DD</Text>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Text size="SMALL">Recipient:</Text>
            <Text size="SMALL">James Gunn</Text>
          </div>
        </div>
        <Text size="MEDIUM">Birthday Party For My 3yo Daughter.</Text>
        <div className="flex justify-between items-center gap-10">
          <div className="flex justify-start items-center gap-2">
            <Text size="SMALL">Role:</Text>
            <Text size="SMALL">Dancer</Text>
          </div>
          <div className="flex justify-evenly items-center gap-2">
          <div className="flex justify-start items-center gap-2">
            <Text size="SMALL">From:</Text>
            <Text size="SMALL">7/06/2023</Text>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Text size="SMALL">To:</Text>
            <Text size="SMALL">7/07/2023</Text>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}