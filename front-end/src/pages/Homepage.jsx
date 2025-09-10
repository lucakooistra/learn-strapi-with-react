import useFetch from "../hooks/UseFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error.length > 0 || data.error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>

          <small>console log</small>

          <p>{review.body[0].children[0].text.substring(0, 200)}...</p>

          <Link to={`/details/${review.documentId}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
