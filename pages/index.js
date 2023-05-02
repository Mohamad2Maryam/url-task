import Link from 'next/link'

function Home()
{
  return <div>
    <Post id=".html" title="Hi Next js"></Post>
    <Post id=".html" title="Hi yut js"></Post>
  </div>
}

function Post(props)
{
  return <div>
    <Link as={`/p${props.id}`} href={`/post?title=${props.title}`}>
    {props.title}
    </Link>
    </div>
}

export default Home;