import Comment from "./comments.jsx";
import CommentsProvider from "../context/comments";
import { CommentsContext } from "../context/comments";
import { useEffect, useContext } from "react";

const CommentList = () => {
  const { comments, fetchComments } = useContext(CommentsContext);
  useEffect(() => {
    fetchComments();
  }, []);
  try {
    return (
      <>
        <p>
          <b>Comments</b>
        </p>
        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map((comment) => Comment({ comment }))
        ) : (
          <p>No comments found.</p>
        )}
      </>
    );
  } catch (error) {
    return <p>{error.message}</p>;
  }
};
export default CommentList;
