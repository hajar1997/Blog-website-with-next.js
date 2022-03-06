import { PostCard, PostWidget } from '../components'
import { getPosts } from '../services'
import Head from 'next/head'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-10 px-10">
      <Head>
        <title>Hər növ məqalələr</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="grid lg:col-span-2 col-span-3 md:col-span-3 lg:grid-cols-2 grid-cols-1 gap-5">
          {posts.map((post, index) => (
            <div>
              <PostCard key={index} post={post.node} />
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-1 lg:col-span-1">
          <div className="relative top-8 hidden lg:sticky lg:block">
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
