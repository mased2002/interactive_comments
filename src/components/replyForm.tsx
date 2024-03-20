import React, { useState, ChangeEvent, FormEvent } from 'react';
import currentProfile from '../../public/images/avatars/image-juliusomo.png'
import {Comment as commentType} from './types/types';
import './styles/replyForm.css'
import { Reply as replyType } from './types/types';
interface ReplyFormProps {
 comment: commentType | replyType;
 onSubmitReply: (replyContent: string) => void;
 onCancel: () => void;
//     onConfirm: () => void;
}

const ReplyForm: React.FC<ReplyFormProps> = ({comment, onSubmitReply, onCancel}) => {
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = () => {
    // Call the onSubmitReply function passed from the parent component
    onSubmitReply(replyContent);
    // Clear the replyContent after submission
    setReplyContent('');
  };

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
        <button className='cancel_btn' onClick={onCancel}></button>
    </div>
  );
};

export default ReplyForm;