import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <Link href='/' className={footerStyles.link}>Go Back</Link>
        </div>
    )
}

export default Footer