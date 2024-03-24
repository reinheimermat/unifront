import { Overview } from '../components/overview'

export function Home() {
  return (
    <section className="ps-12 pt-16">
      <h1 className=" text-primary font-bold text-4xl">
        Seja bem-vindo (a), Matheus.
      </h1>
      <Overview />
    </section>
  )
}
