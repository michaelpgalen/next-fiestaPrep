import CocktailItem from './CocktailItem'
import articleStyles from '../styles/Article.module.css'

const CocktailList = ({tequilaCocktails}) => {
    return (
        <div className={articleStyles.grid}>
            {tequilaCocktails.drinks.map( cocktail => 
            <CocktailItem cocktail={cocktail} key={cocktail.strDrink}/>)}
        </div>
    )
}

export default CocktailList