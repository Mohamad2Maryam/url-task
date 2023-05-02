/* eslint-disable react/jsx-no-undef */
import{withRouter} from 'next/router'

const Post= withRouter((props) =>
{
  return <div>
    <h1>{props.router.query.title}</h1>
    <p>Dynamic url</p>
    </div>
})

export default Post;