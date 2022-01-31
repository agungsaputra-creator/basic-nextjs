import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogPost {
  dataBlog: Post[];
}

const Blog = (props: BlogPost) => {
  const { dataBlog } = props;

  return (
    <Layout pageTitle="Blog Page">
      <h1 className="title">Ini halaman Blog</h1>
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
