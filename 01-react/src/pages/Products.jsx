import React, {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import "./products.css";
import axios from "axios";

const data = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: 100000 + i * 25000,
  image: `https://picsum.photos/seed/prod${i}/600/400`,
}));


const API_URL = 'http://localhost:5001/api';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);


    useEffect(() => {
        const fetchData =  async () => {
            setLoading(true)
            try{
                const res = await axios.get(API_URL + '/products');
                setProducts(res.data);
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, []);

  const navigate = useNavigate();

    if (loading) {
        return <p>Loading...</p>
    }

  return (
    <section className="page-section">
      <div className="toolbar">
        <h2>Semua Produk</h2>
        <input className="search" placeholder="Cari produk…" />
      </div>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            onClick={() => navigate(`/products/${p.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
