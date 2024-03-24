import { Home, UserRound, GraduationCap, User, Calendar } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const nav = [
    {
      title: 'Ínicio',
      url: '/',
      icon: <Home className="size-4 md:size-6 lg:size-8" />,
    },
    {
      title: 'Estudantes',
      url: '/estudantes',
      icon: <GraduationCap className="size-4 md:size-6 lg:size-8" />,
    },
    {
      title: 'Professores',
      url: '/professores',
      icon: <User className="size-4 md:size-6 lg:size-8" />,
    },
    {
      title: 'Turmas',
      url: '/turmas',
      icon: <Calendar className="size-4 md:size-6 lg:size-8" />,
    },
    {
      title: 'Usuários',
      url: '/usuarios',
      icon: <UserRound className="size-4 md:size-6 lg:size-8" />,
    },
  ]

  const [selectedItem, setSelectedItem] = useState(null)

  const handleItemClick = (index) => {
    setSelectedItem(index)
  }

  return (
    <nav className="bg-primary flex flex-col h-screen max-w-12 md:max-w-44 lg:max-w-56 xl:max-w-72">
      <header>
        <h1 className="text-white md:text-2xl lg:text-4xl font-bold p-4 text-center py-10 text-secondary hidden md:block">
          Unifront
        </h1>
      </header>
      <ul className="flex flex-col gap-2 items-center md:items-baseline md:ps-4 xl:ps-8">
        {nav.map((item, index) => (
          <li
            key={index}
            className={`flex items-center w-full gap-2 p-4 text-secondary md:text-sm lg:text-lg ${
              selectedItem === index
                ? 'bg-secondary text-primary rounded-l-full'
                : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            <span className="md:mx-2">{item.icon}</span>{' '}
            <p className="hidden md:flex">{item.title}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}
