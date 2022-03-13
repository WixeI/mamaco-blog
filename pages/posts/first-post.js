import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

/**
 * Summary:
 * 
 * - Head - To add metadata to the Page.
 * - Scripts - To load third party software, such as Google Analytics, Facebook Login, etc.
 * - 
 */

export default function FirstPost({ data }) {
    return (
        <Layout>
            <Head>
                <title>First Post!!</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded. Window.FB has been populated to be used`)
                }
            />
            <h1>First Post Boii</h1>
            <h1>Data: {data}</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}

export async function getStaticProps() {
    const data = "Pão Italiano";

    return {
        props: {
            data: data
        }
    }
}