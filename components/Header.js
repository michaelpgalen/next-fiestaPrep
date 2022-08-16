import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Fiesta</span> Prep
            </h1>
            <p className={headerStyles.description}>
                Prepare your fiesta with the right tequila cocktail
            </p>
        </div>
    )
}

export default Header