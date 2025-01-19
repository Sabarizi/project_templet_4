import { getProductById } from "../../../sanity/lib/api";
import { urlFor } from "../../../sanity/lib/client";
import Image from "next/image";
import AddToCartButton from "../../compunents/AddToCartButton"; // <-- Client component

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  // Fetch product from your Sanity helper
  const product = await getProductById(params.id);

  // If product is not found, you may want to handle a 404 or redirect.
  if (!product) {
    return <div>Product not found</div>;
  }

  // Return a simple product page with a Client component for the "Add to Cart" button
  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <Image
        src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
        alt={product.name}
        width={500}
        height={500}
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Stock Status:</strong> {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      <p>
        <strong>Reviews:</strong> {product.reviews || "No reviews yet"}
      </p>

      {/* Client component handles localStorage */}
      <AddToCartButton product={product} />
    </div>
  );
}
