import Footer from "../components/Footer"
import Header from "../components/Header"
import { parseISO } from 'date-fns';
import { useRouter } from "next/router";
import InfoCards from "../components/InfoCards";

function Search({ searchResult }) {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuest } = router.query;
  const formattedStartDate = parseISO(startDate).toDateString();
  const formattedEndDate = parseISO(endDate).toDateString();

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuest} guests`}/>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">200+ Stays from {range} - for {numberOfGuest} guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of price</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(({ img, location, title, description, price, star, total }) => (
              <InfoCards
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(){
  const searchResult = await fetch("https://links.papareact.com/isz")
                            .then(respond => respond.json());
  return {
    props: {
      searchResult,
    }
  }
}
