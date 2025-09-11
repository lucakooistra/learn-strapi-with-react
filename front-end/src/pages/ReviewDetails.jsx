import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_REVIEW = gql`
  query GetReview($documentId: ID!) {
    review(documentId: $documentId) {
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
`;

export default function ReviewDetails() {
  const { documentId } = useParams();

  const { loading, error, data } = useQuery(GET_REVIEW, {
    variables: { documentId: documentId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  console.log("data", data);

  return (
    <div className="review-card">
      <div className="rating">{data.review.rating}</div>
      <h2>{data.review.title}</h2>

      {data.review.categories.map((category) => (
        <small key={category.documentId}>{category.name} </small>
      ))}

      <p>{data.review.body[0].children[0].text}</p>
    </div>
  );
}
