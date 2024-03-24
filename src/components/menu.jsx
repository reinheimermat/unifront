import { Bolt, Bell } from 'lucide-react'
import logo from '../assets/logo.png'

export function Menu() {
  return (
    <article className="flex items-center gap-6">
      <span className="bg-white rounded-full p-3">
        <Bell className="text-gray-500" />
      </span>
      <span className="bg-white rounded-full p-3">
        <Bolt className="text-gray-500" />
      </span>
      <aside className="flex items-center text-end gap-4">
        <div>
          <span className="text-blue-950 font-bold">Matheus Reinheimer</span>
          <p className="text-gray-500">Admin</p>
        </div>
        <img src={logo} alt="Foto de perfil" className="size-12" />
      </aside>
    </article>
  )
}
