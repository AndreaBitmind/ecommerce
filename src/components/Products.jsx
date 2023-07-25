import { AddToCartIcon } from "./icons";

function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
            </div>
            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Products;
