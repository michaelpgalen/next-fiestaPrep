// made this config folder and this file to check if we're in dev mode or not.
// if in dev mode, then we are fetching from localhost:3000
// when deployed, we'll need to fetch from the url of the data, not localhost:3000

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'