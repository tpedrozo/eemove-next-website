import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { SectionOne } from "../components/SectionOne"
import { SectionTwo } from "../components/SectionTwo"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default Home
