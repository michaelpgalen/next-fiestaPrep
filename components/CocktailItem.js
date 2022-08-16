import Link from 'next/link'
// import Image from 'next/image'
import articleStyles from '../styles/Article.module.css'

const CocktailItem = ({cocktail}) => {
    return (
        <Link href="/cocktail/[id]" as={`/cocktail/${cocktail.idDrink}`}>
            <a className={articleStyles.card}>
                <h3>{cocktail.strDrink}</h3>
                <picture >
                    <source srcset={cocktail.strDrinkThumb+'/preview'} />
                    <img src={cocktail.strDrinkThumb+'/preview'} alt={cocktail.strDrink}/>
                </picture> 
            </a>
        </Link>
    )
}

export default CocktailItem