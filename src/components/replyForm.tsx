import React, { useState, ChangeEvent, FormEvent } from 'react';
import currentProfile from '../../public/images/avatars/image-juliusomo.png'
import {Comment as commentType} from './types/types';
import './styles/replyForm.css'

interface ReplyFormProps {
 comment: commentType
 onSubmitReply: (replyContent: string) => void;
}

const ReplyForm: React.FC<ReplyFormProps> = ({ comment, onSubmitReply }) => {
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = () => {
    // Call the onSubmitReply function passed from the parent component
    onSubmitReply(replyContent);
    // Clear the replyContent after submission
    setReplyContent('');
  };

//   const handleReplyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setReplyContent(event.target.value);
//   };

//   const handleSubmitReply = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onSubmitReply(replyContent);
//     setReplyContent('');
//     setShowReplyForm(false);
//   };

  return (
    <div className="reply-form">
        {/* <img src={currentProfile} alt="my image" />
        <form onSubmit={handleReplySubmit}>
          <textarea
            value={replyContent}
            onChange={handleReplyChange}
            placeholder="Type your reply here..."
            rows={3}
          />
          <button type="submit">Submit Reply</button>
        </form> */}
        <img src={currentProfile} alt="my image" />
        <textarea className='reply-form_textArea'
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder={ `Replying to @${comment.user.username}`}
            rows={3}
        />
        <button className='submit_btn' onClick={handleReplySubmit}>Reply</button>
    </div>
  );
};

export default ReplyForm;