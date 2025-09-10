import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

export default function ReviewDetails() {
  const { documentId } = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/reviews/` + documentId
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error.length > 0 || data.error) {
    return <div>Error</div>;
  }
  console.log("data", data);

  return (
    <div className="review-card">
      <div className="rating">{data.rating}</div>
      <h2>{data.title}</h2>

      <small>console log</small>

      <p>{data.body[0].children[0].text}</p>
    </div>
  );
}
