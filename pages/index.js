import CocktailList from '../components/CocktailList'

export default function Home({tequilaCocktails}) {
  return (
    <div >
      <CocktailList tequilaCocktails={tequilaCocktails}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila')
  const tequilaCocktails = await res.json()

  return {
    props: {
      tequilaCocktails
    }
  }
}
