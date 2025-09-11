import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const GET_CATEGORY = gql`
  query GetCategory($documentId: ID!) {
    category(documentId: $documentId) {
      name
      documentId
      reviews {
        title
        body
        rating
        documentId
        categories {
          name
          documentId
        }
      }
    }
  }
`;
export default function Category() {
  const { documentId } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { documentId: documentId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return (
    <div>
      <h2>{data.category.name}</h2>
      {data.category.reviews.map((review) => (
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
