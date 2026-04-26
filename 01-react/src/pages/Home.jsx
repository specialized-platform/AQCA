import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import "./home.css";

const featured = [
  { id: 1, title: "Sneakers", price: 499000, image: "https://picsum.photos/seed/1/600/400" },
  { id: 2, title: "Backpack", price: 349000, image: "https://picsum.photos/seed/2/600/400" },
  { id: 3, title: "Watch", price: 899000, image: "https://picsum.photos/seed/3/600/400" },
  { id: 4, title: "Headphones", price: 275000, image: "https://picsum.photos/seed/4/600/400" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-section">
      <div className="hero">
        <h1>Selamat Datang di Online Shop</h1>
        <p>Belanja mudah, cepat, dan aman.</p>
        <button className="hero-btn" onClick={() => navigate("/products")}>
          Lihat Semua Produk
        </button>
      </div>
      <div className="featured-section">
        <h2>Produk Unggulan</h2>
        <div className="featured-grid">
          {featured.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              onClick={() => navigate(`/products/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
