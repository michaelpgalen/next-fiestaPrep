import Head from "next/head"

const Meta = ( {title, keywords, description} ) => {
    return (
        <Head>
            <meta name='viewport'
            content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Fiesta Prep',
    keywords: 'cocktails, tequila, fiesta, nextjs, frontend, dev, portland',
    description: 'Find the right drink for your fiesta!'
}

export default Meta