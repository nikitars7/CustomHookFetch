import useFetch from "../hooks/useFetch";
import styles from "../styles/Style.module.scss";
const Albums = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return (
    <div>
      <h1>Albums</h1>
      {isLoading && <h2>Data is loading...</h2>}
      {error && <h2 className={styles.Error}>Something went wrong ...</h2>}
      {data &&
        data.map((albums) => {
          return (
            <div className={styles.Albums} key={albums.id}>
              <p>{`title: ${albums.title}`}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Albums;
