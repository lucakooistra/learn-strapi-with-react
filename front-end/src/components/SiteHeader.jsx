import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      documentId
    }
  }
`;

export default function SiteHeader() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="site-header">
      <Link to="/">
        <h1>My reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter review by category:</span>
        {data.categories.map((category) => (
          <Link
            key={category.documentId}
            to={`/category/${category.documentId}`}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
