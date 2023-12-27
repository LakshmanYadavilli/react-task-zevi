import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./home.module.css";
const Home = () => {
  const [data, setData] = useState([]);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => {
        throw new Error(e);
      });
  };

  useEffect(() => fetchProducts());
  return (
    <div className={styles.body}>
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} /> <FaSearch />
      </div>
    </div>
  );
};

export default Home;
