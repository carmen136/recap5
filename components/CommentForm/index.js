export default function CommentForm() {
  console.log("CommentForm");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">
        <input type="text" name="input" id="comment"></input>
      </label>
    </form>
  );
}

/* data sind die aufgenommen Daten, diese müssen wir einfach in der Comments Funktion übergeben, wie gewohnt. */
