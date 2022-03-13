import '../styles/global.css'
import '../styles/utils.css'

/**
 * Summary:
 * 
 * - Component: Active page. Changes whenever user changes to a different page
 * - pageProps: Object with preloaded props. Any imports will go here.
 */

export default function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}