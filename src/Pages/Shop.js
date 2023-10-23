import Hero from '../Components/Hero/Hero.js'
import Popular from '../Components/Popular/Popular.js'
import Offers from '../Components/Offers/Offers.js'
import NewCollections from '../Components/NewCollections/NewCollections.js'
import NewsLetter from '../Components/NewsLetter/NewsLetter.js'

function Shop()
{
    return (<div>
        <Hero></Hero>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollections></NewCollections>
        <NewsLetter/>
    </div>)
}

export default Shop