// import Link from "next/link"
import Image from "next/image"

const cocktail = ({cocktailDetails}) => {

    function ingredientLi(ingredient, measurementCall) {
        if (ingredient) {
            return (<li>{ingredient}: {measurementCall}</li>)
        } else return null
    }

    function measurementCall(measurement) {
        if (measurement) {
            return measurement
        } else {
            return null
        }
    }

    // <Image src={cocktailDetails.strDrinkThumb} alt="image of cocktail" layout="fill" className="cocktailImg"/>

    return (
        <div className="cocktailSection">
                <h2>{cocktailDetails.strDrink}</h2>
                <picture>
                    <source srcset={cocktailDetails.strDrinkThumb}/>
                    <img src={cocktailDetails.strDrinkThumb} alt="image of cocktail" width="300"/>
                </picture> 
                <h3>Ingredients</h3>
                <ul>
                    <li>Glass: {cocktailDetails.strGlass}</li>
                    {ingredientLi(cocktailDetails.strIngredient1, measurementCall(cocktailDetails.strMeasure1))}
                    {ingredientLi(cocktailDetails.strIngredient2, measurementCall(cocktailDetails.strMeasure2))}
                    {ingredientLi(cocktailDetails.strIngredient3, measurementCall(cocktailDetails.strMeasure3))}
                    {ingredientLi(cocktailDetails.strIngredient4, measurementCall(cocktailDetails.strMeasure4))}
                    {ingredientLi(cocktailDetails.strIngredient5, measurementCall(cocktailDetails.strMeasure5))}
                    {ingredientLi(cocktailDetails.strIngredient6, measurementCall(cocktailDetails.strMeasure6))}
                    {ingredientLi(cocktailDetails.strIngredient7, measurementCall(cocktailDetails.strMeasure7))}
                    {ingredientLi(cocktailDetails.strIngredient8, measurementCall(cocktailDetails.strMeasure8))}
                    {ingredientLi(cocktailDetails.strIngredient9, measurementCall(cocktailDetails.strMeasure9))}
                    {ingredientLi(cocktailDetails.strIngredient10, measurementCall(cocktailDetails.strMeasur10))}
                    {ingredientLi(cocktailDetails.strIngredient11, measurementCall(cocktailDetails.strMeasure11))}
                    {ingredientLi(cocktailDetails.strIngredient12, measurementCall(cocktailDetails.strMeasure12))}
                </ul>
                <h3>Instructions</h3>
                <p>
                    {cocktailDetails.strInstructions}
                </p>
           
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${context.params.id}`)
    const cocktail = await res.json()
    const cocktailDetails = await cocktail.drinks[0]

    return {
        props: {
            cocktailDetails
        }
    }
}

export default cocktail