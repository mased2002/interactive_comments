import React, { useEffect, useState } from "react"
import { Comment as CommentType, Reply as ReplyType } from "./types/types";
import data from '../data.json'
import './styles/CommentsComp.css'
import Comment from "./comment";
import currentProfile from '../../public/images/avatars/image-juliusomo.png'
import DeleteModal from "./deleteModal";

let numberId: number = 5


const CommentsComp: React.FC = () => {
    const [backendComments, setBackendComments] = useState<CommentType[]>([]);
    const [newComment, setNewComment] = useState<string>('')
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [commentToDelete, setCommentToDelete] = useState<CommentType | null>(null);
    useEffect(() => {
        setBackendComments(data.comments)
        console.log(backendComments)
    }, [])

    // add comment fuction
    const addNewComment = (text: typeof newComment) =>{
        const id = numberId + 1;
        numberId = id;
        const newCommentObject: CommentType = {
            id,
            content: newComment,
            createdAt: "just now",//new Date().toISOString(),
            score: 0,
            user: data.currentUser,
            replies: []
        }
        // Update backendComments with the new comment object
        setBackendComments([...backendComments, newCommentObject]);

        //clear the newComment textarea after adding the comment
        setNewComment('');
    }
    // comment to delete is taken
    const handleDeleteComment = (comment: CommentType) => {
        setCommentToDelete(comment);
        setShowDeleteModal(true);
    };

    // confirm deletion of comment
    const handleConfirmDelete = () => {
        if (commentToDelete) {
          const updatedComments = backendComments.filter(
            (comment) => comment.id !== commentToDelete.id
          );
          setBackendComments(updatedComments);
          setShowDeleteModal(false); //close the delete modal without deleting
          setCommentToDelete(null); //Reset the commentToDelete state
        }
    };

    // cancel delete when no i clicked
    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setCommentToDelete(null);
    };

    // delete reply
    const handleDeleteReply = (replyToDelete: ReplyType) => {
        const updatedComments = backendComments.map(comment => {
          if (comment.replies) {
            comment.replies = comment.replies.filter(reply => reply.id !== replyToDelete.id);
          }
          return comment;
        });
        setBackendComments(updatedComments);
      };

    return (
        <div className="comments">
            {backendComments.map((comment) => (
                <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} onDeleteReply={handleDeleteReply}/>
            ))}
            {showDeleteModal && (
                <DeleteModal 
                onCancel={handleCancelDelete}
                onConfirm={handleConfirmDelete}
                />
            )}
            {/* Textarea for adding a new comment */}
            <div className="textArea">
                <img src={currentProfile} alt="my image" />
                <textarea className="textAreaPlace" value={newComment} 
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a new comment..."
                />
                <button className="submit_btn" onClick={() => {addNewComment(newComment)}}>Send</button>
            </div>
        </div>
        // <div className="comments">
        //     {backendComments.map((comment) => (
        //        <div key={comment.id} className="comment">
        //        <p className="comment_user">{comment.user.username}</p>
        //        <p className="comment_content">{comment.content}</p>
        //    </div>
        //     ))}
        // </div>
    )
}

// function to generate id
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
export default CommentsComp;