import { Link } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      documentId
      title
      body
      rating
      categories {
        name
        documentId
      }
    }
  }
`;
export default function Homepage() {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) return <div>Error</div>;

  return (
    <div>
      {data.reviews.map((review) => (
        <div key={review.documentId} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>

          {review.categories.map((category) => (
            <small key={category.documentId}>{category.name} </small>
          ))}

          <p>{review.body[0].children[0].text.substring(0, 200)}...</p>

          <Link to={`/details/${review.documentId}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
