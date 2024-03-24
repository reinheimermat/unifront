import { Menu } from '../components/menu'
import { Overview } from '../components/overview'

export function Home() {
  return (
    <section className="px-12 pt-16">
      <article className="flex items-center justify-between w-full">
        <h1 className=" text-primary font-bold text-4xl">
          Seja bem-vindo (a), Matheus.
        </h1>
        <Menu />
      </article>
      <Overview />
    </section>
  )
}
