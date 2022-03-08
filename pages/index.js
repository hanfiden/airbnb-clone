import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Fiden - Airbnb</title>
        <meta name="description" content="Fiden Airbnb's clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Airbnb</h1>
      <Header/>
    </div>
  )
}
