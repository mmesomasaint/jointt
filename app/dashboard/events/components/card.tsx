import Text from "@/app/components/text"

export default function Card({name, type, cost, date}: {name:string, type:string, cost:number, date: Date}) {
  return (
    <div className="w-full h-fit p-5 rounded-xl shadow-md">
      <div className="w-full flex justify-between items-center gap-10">
        <Text size="SEMIBOLD">{name}</Text>
        <Text size="MEDIUM">N{cost}</Text>
      </div>
      <div className="w-full flex justify-between items-center gap-10">
        <Text size="SEMIBOLD">{type}</Text>
        <Text size="MEDIUM">{date.toLocaleDateString()}</Text>
      </div>
    </div>
  )
}