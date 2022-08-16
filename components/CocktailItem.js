import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const CocktailItem = ({cocktail}) => {
    return (
        <Link href="/cocktail/[id]" as={`/cocktail/${cocktail.idDrink}`}>
            <a className={articleStyles.card}>
                <h3>{cocktail.strDrink}</h3>
                <img src={cocktail.strDrinkThumb+'/preview'} alt={cocktail.strDrink} />
            </a>
        </Link>
    )
}

export default CocktailItem