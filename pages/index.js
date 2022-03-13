import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../utils/get-posts'

/**
 * - The return is an object that contains "props" and other optional properties, like "middleware"
 * - The "props" is an object. If you put a variable inside an object, the key will be the variable name, 
 * and value the variable's content
 */
export async function getStaticProps() {
  const postsMetadata = getSortedPostsData()
  return {
    props: {
      postsMetadata
    }
  }
}

export default function Home({ postsMetadata }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="headingMd">
          <p>Boa nerdola, tô gostando de ver</p>

          <Link href="/posts/first-post">
            <a>Nerdola Profile</a>
          </Link>

          <div className="backgroundMonke">
            <Image
              src="/images/nerdola.png"

              width={800}
              height={800}
            />
          </div>

          <section>
            <h2>Blog</h2>
            <ul>
              {postsMetadata.map(({ id, title, date }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <Date dateString={date} />
                  <br />
                  {id}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </Layout>

      <style jsx>{`
      .backgroundMonke {
        position: absolute;
        top: 50%;
        left: -20%;
        transform: translateY(-50%);
        opacity: 0.3;
        z-index: -1;
        animation-name: monkeSlide;
        animation-duration: 0.8s;
        animation-timing-function: ease-out;
      }

      @keyframes monkeSlide {
        from {left: -50%; opacity: 0;}
        to {left: -20%; opacity: 0.3;}
      }
    `}</style>
    </>
  )
}
