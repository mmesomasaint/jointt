import Text from "@/app/components/text";

export default function JobCard({title, desc, roles, budget, expireDate}: {title: string, desc: string, roles: string[], budget: number, expireDate: number}) {
  return (
    <div className="rounded-xl bg-white text-black p-5">
      <Text size="SEMIBOLD">{title}</Text>
      <Text size="SMALL">{desc}</Text>
      <div className="flex justify-start items-center gap-3">
        {roles.map(role => (
          <div key={role} className="rounded-xl bg-gray-900/50 p-2 shadow-xl">
            <Text size="SMALL">{role}</Text>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="flex justify-start items-center gap-1">
          <Text size="SMALL">Budge:</Text>
          <Text size="SMALL">{budget}</Text>
        </div>
        <div className="flex justify-start items-center gap-1">
          <Text size="SMALL">Expire:</Text>
          <Text size="SMALL">{new Date(expireDate).toLocaleDateString()}</Text>
        </div>
      </div>
    </div>
  )
}