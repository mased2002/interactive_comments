import './styles/deleteModal.css'
import React from 'react';

interface DeleteModalProps {
    onCancel: () => void;
    onConfirm: () => void;
}
const DeleteModal: React.FC<DeleteModalProps> = ({onCancel, onConfirm}) => {
    return (
      <div className="delete_modal">
        <h2 className="delete_modal_title">Delete comment</h2>
        <p className="delete_modal_content">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="delete_modal_btns">
          <button className="delete_modal_btn no" onClick={onCancel}>No, cancel</button>
          <button className="delete-modal_btn yes" onClick={onConfirm}>Yes, delete</button>
        </div>
      </div>
    );
  }

  export default DeleteModal;

/*
  import React, { useEffect, useState } from "react";
import { Comment as CommentType, Reply as ReplyType } from "./types/types";
import data from "../data.json";
import "./styles/CommentsComp.css";
import Comment from "./comment";
import currentProfile from "../../public/images/avatars/image-juliusomo.png";
import DeleteModal from "./DeleteModal";

const CommentsComp: React.FC = () => {
  const [backendComments, setBackendComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [commentToDelete, setCommentToDelete] = useState<CommentType | null>(
    null
  );

  useEffect(() => {
    setBackendComments(data.comments);
  }, []);

  const addNewComment = (text: string) => {
    // Implementation to add new comment (similar to your previous code)
  };

  const handleDeleteComment = (comment: CommentType) => {
    setCommentToDelete(comment);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (commentToDelete) {
      const updatedComments = backendComments.filter(
        (comment) => comment.id !== commentToDelete.id
      );
      setBackendComments(updatedComments);
      setShowDeleteModal(false);
      setCommentToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setCommentToDelete(null);
  };

  return (
    <div className="comments">
      {backendComments.map((comment) => (
        <div key={comment.id} className="comment">
          <p className="comment_user">{comment.user.username}</p>
          <p className="comment_content">{comment.content}</p>
          <button onClick={() => handleDeleteComment(comment)}>Delete</button>
        </div>
      ))}

      {showDeleteModal && (
        <DeleteModal
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}

      {/* Textarea for adding a new comment *///} 
      /*<div className="textArea">
        <img src={currentProfile} alt="my image" />
        <textarea
          className="textAreaPlace"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment..."
        />
        <button
          className="submit_btn"
          onClick={() => {
            addNewComment(newComment);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommentsComp;

*/