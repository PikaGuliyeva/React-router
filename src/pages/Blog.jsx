import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog səhifəsi</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
}

export default Blog;