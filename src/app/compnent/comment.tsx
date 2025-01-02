"use client"; // Add this line to mark the component as a client component

import { useState } from "react";

const BlogComments = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState<string[]>([]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim()) {
      setCommentsList((prevComments) => [...prevComments, comment]); // Add new comment to the list
      setComment(""); // Optionally reset the input field after submission
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      
      {/* Display list of submitted comments */}
      <div className="mt-4 space-y-4">
        {commentsList.length === 0 ? (
          <p className="text-gray-400">No comments yet. Be the first to comment!</p>
        ) : (
          commentsList.map((c, index) => (
            <p key={index} className="text-gray-200">
              {c}
            </p>
          ))
        )}
      </div>

      {/* Comment form */}
      <textarea
        value={comment}
        onChange={handleCommentChange}
        className="w-full p-2 border border-gray-500 rounded-md bg-gray-800 text-white mt-4"
        placeholder="Write your comment..."
      ></textarea>

      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:text-blue-500 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default BlogComments;
