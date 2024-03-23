import React, { useState } from "react";
import { Reply as replyType } from "./types/types";

interface formProps{
    reply: replyType,
    onCancel: () => void;
    onReply: (replyContent: string, reply: replyType) => void;
}
 export interface currentUserProps{
    image: {
        png: string,
        webp: string
    },
    username: string
}


 export const Form: React.FC<formProps>=({reply, onCancel, onReply})=>{
    const [replyContent, setReplyContent] = useState('');
    const [currentUser, setCurrentUser] = useState<currentUserProps>()
    const currentUserDataString = localStorage.getItem('currentUser');

if (currentUserDataString !== null) {
  const currentuserData = JSON.parse(currentUserDataString);
  // Now you can safely use currentuserData
  setCurrentUser(currentuserData);
}
const handleReplySubmit = () => {
    // Call the onSubmitReply function passed from the parent component
    onReply(replyContent, reply);
    // Clear the replyContent after submission
    setReplyContent('');
  };
    return(
        <div className="reply_form">
            <img src={currentUser?.username} alt="my image" />
            <textarea 
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder={`replying to @${reply.user.username}`}
            />
            <button className="submit_btn" onClick={handleReplySubmit}>Reply</button>
            <button className="cancel_btn" onClick={onCancel}>Cancel</button>
        </div>
    )
}


// export default Form;