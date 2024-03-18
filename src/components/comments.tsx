import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import data from '../data.json'; // Assuming data is stored in a JSON file

// function Comments() {
//   const { currentUser, comments } = data;

//   return (
//     <div className="comments-container">
//       <div className="comment-form">
//         {/* Your comment form JSX goes here */}
//       </div>

//       <div className="comments-list">
//         {comments.map((comment) => (
//           <div key={comment.id} className="comment">
//             <div className="user-info">
//               <img
//                 src={comment.user.image.webp}
//                 alt={comment.user.username}
//                 className="avatar"
//               />
//               <span className="username">{comment.user.username}</span>
//               <span className="timestamp">{comment.createdAt}</span>
//             </div>
//             <p className="content">{comment.content}</p>

//             {/* Render replies if available */}
//             {comment.replies.length > 0 && (
//               <div className="replies">
//                 {comment.replies.map((reply) => (
//                   <div key={reply.id} className="reply">
//                     <div className="user-info">
//                       <img
//                         src={reply.user.image.webp}
//                         alt={reply.user.username}
//                         className="avatar"
//                       />
//                       <span className="username">{reply.user.username}</span>
//                       <span className="timestamp">{reply.createdAt}</span>
//                     </div>
//                     <p className="content">{reply.content}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
interface Comment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    replies?: Comment[];
  }
  
  const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>(data.comments);
    const [newComment, setNewComment] = useState<string>('');
  
    const createComment = () => {
      const id = nanoid();
      const createdAt = new Date().toLocaleDateString();
      const comment: Comment = {
        id,
        content: newComment,
        createdAt,
        score: 0,
        user: {
          image: {
            png: '', // Add image path if needed
            webp: '', // Add image path if needed
          },
          username: 'YourUsername', // Replace with actual username or fetch from user context
        },
        replies: [],
      };
      setComments([...comments, comment]);
      setNewComment('');
    };
  
    const editComment = (id: number, newContent: string) => {
      const updatedComments = comments.map((comment) =>
        comment.id === id ? { ...comment, content: newContent } : comment
      );
      setComments(updatedComments);
    };
  
    const replyToComment = (id: number, replyContent: string) => {
      const updatedComments = comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: nanoid(),
                  content: replyContent,
                  createdAt: new Date().toLocaleDateString(),
                  score: 0,
                  user: {
                    image: {
                      png: '', // Add image path if needed
                      webp: '', // Add image path if needed
                    },
                    username: 'YourUsername', // Replace with actual username or fetch from user context
                  },
                },
              ],
            }
          : comment
      );
      setComments(updatedComments);
    };
  
    const deleteComment = (id: number) => {
      const updatedComments = comments.filter((comment) => comment.id !== id);
      setComments(updatedComments);
    };
  
    return (
      <div className="comments-container">
        {/* Display comments */}
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            {/* Display comment content */}
            <p>{comment.content}</p>
            {/* Add edit, reply, and delete buttons */}
            <button onClick={() => editComment(comment.id, 'Updated content')}>
              Edit
            </button>
            <button onClick={() => replyToComment(comment.id, 'Reply content')}>
              Reply
            </button>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        ))}
        {/* Add new comment form */}
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={createComment}>Add Comment</button>
      </div>
    );
  };
  
  export default Comments;