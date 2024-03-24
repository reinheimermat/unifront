import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="flex items-center justify-between text-end">
      <h1 className="pt-8 ps-8 text-primary font-bold text-4xl">
        Seja bem-vindo (a), Matheus.
      </h1>
      <Link
        to="/estudantes"
        className="bg-primary text-secondary font-bold rounded-full p-2 pe-8 ps-8 text-lg"
      ></Link>
    </section>
  )
}
