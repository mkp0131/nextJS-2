import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import Seo from '../components/Seo';

export default function Home() {
  const mainPosts = useSelector((state) => state.post.mainPosts);
  return (
    <>
      <Seo title="홈" />
      <Layout>
        <PostForm />
        {mainPosts.map((post) => (
          <Post key={post.id} postData={post} />
        ))}
      </Layout>
    </>
  );
}
