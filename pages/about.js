import Meta from '../components/Meta'

const about = () => {
    return (
        <div className='container'>
            <Meta title='about' />
            <h1>About</h1>
            <p>I hope you enjoy these cocktails! This website was built using thecocktaildb api, ReactJS, and NextJS. Designed and developed by Michael Galen. See more of his work at 
                <span><a href='https://mgalen.com'> MGalen.com</a></span>
            </p>
            
        </div>
    )
}

export default about