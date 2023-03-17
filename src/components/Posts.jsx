import useFetch from "../hooks/useFetch";
import styles from "../styles/Style.module.scss";
const Posts = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <h2>Data is loading...</h2>}
      {error && <h2 className={styles.Error}>Something went wrong ...</h2>}
      {data &&
        data.map((post) => {
          return (
            <div className={styles.Post} key={post.id}>
              <p>{`title: ${post.title}`}</p>
              <p>{`body: ${post.body}`}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
