import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Fiden - Airbnb</title>
        <meta name="description" content="Fiden Airbnb's clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-6xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            { exploreData?.map(item => (
              <SmallCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
              />
              )) }
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}
