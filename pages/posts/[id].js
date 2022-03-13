import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../utils/get-posts";

//Flow order: getStaticPaths -> getStaticProps -> Template ("Posts")

/**
 * - Its "paths" key in the return is the props.params of "getStaticProps". 
 * - "params" must contain a key with the name of the dynamic file ("id")
 */
export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

/**
 * - Receives information from "getStaticPaths" and gather other information based on it
 * - The "params" key must have this name to get information of "getStaticPaths".
 * - The "id" key inside "params" is used to set the name of the page/file, like a variable
 */
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}