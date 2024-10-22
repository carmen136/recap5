import CommentForm from "../CommentForm";

export default function Comments({ comments }) {
  console.log("Comments");

  return (
    <>
      <CommentForm />
      <div>
        <h3>{comments.input}</h3>
        <p>
          {comments.date} {comments.time}
        </p>
      </div>
    </>
  );
}
