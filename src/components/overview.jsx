import { GraduationCap, User, Calendar } from 'lucide-react'

export function Overview() {
  const card = [
    {
      title: 'Estudantes',
      value: 932,
      color: 'bg-primary',
      icon: <GraduationCap className="size-10" />,
    },
    {
      title: 'Professores',
      value: 754,
      color: 'bg-orange-600',
      icon: <User className="size-10" />,
    },
    {
      title: 'Turmas',
      value: 40,
      color: 'bg-yellow-400',
      icon: <Calendar className="size-10" />,
    },
  ]

  return (
    <article className="bg-white mt-20 p-11 rounded-3xl max-w-3xl">
      <ul className="flex gap-4">
        {card.map((item, index) => (
          <li key={index} className="flex flex-col gap-2 p-4 rounded-md">
            <aside className="flex items-center gap-4">
              <span className={` rounded-full p-4 text-white ${item.color}`}>
                {item.icon}
              </span>
              <div>
                <h3 className="text-gray-500 text-lg">{item.title}</h3>
                <p className="text-blue-950 font-bold text-4xl text-center">
                  {item.value}
                </p>
              </div>
            </aside>
          </li>
        ))}
      </ul>
    </article>
  )
}
