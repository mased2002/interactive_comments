import { Reply as ReplyType } from "./types/types";
import './styles/comment.css'
import data from '../data.json'
import './styles/reply.css'
import { useEffect, useState } from "react";
import { numberId } from "./CommentsComp";
import { currentUserProps } from "./Form";
import { Form } from "./Form";

// this is the next argument
// onReplyReply: (reply: ReplyType)=> void;

function Replies ({reply, onDelete, onReplyReply}: {reply: ReplyType; onDelete: (reply: ReplyType) => void; onReplyReply: (reply: ReplyType)=> void;}){
    const handleReply= () => {
        onReplyReply(reply);
        console.log(reply)
    }
    // const[showForm, setShowForm] = useState<Boolean>(false)
    // const[replyToReply, setReplyToReply] = useState<ReplyType | null>(null)

    // const[currentUser, setCurrentUser] = useState<currentUserProps>()
    // useEffect(() => {
    //     const currentUserDataString = localStorage.getItem('currentUser');

    //     if (currentUserDataString !== null) {
    //     const currentuserData = JSON.parse(currentUserDataString);
    //     // Now you can safely use currentuserData
    //     setCurrentUser(currentuserData);
    //     }
    // }, [])

    //     const handleAddReply = (replyContent: string, reply: ReplyType) =>{
    //         setReplyToReply(reply)
    //         const id = numberId +1
    //         const newReply = {
    //             id,
    //             content: replyContent,
    //             createdAt:"just now",
    //             score: 42,
    //             replyingTo: "@" + replyToReply?.user.username,
    //             user: {
    //                 image: {
    //                     png: currentUser?.image.png,
    //                     webp: currentUser?.image.webp
    //                 },
    //                 username: currentUser?.username
    //             }
    //         };
    //         console.log(newReply)
    //     }


        // add the reply

        // when reply is cancelled
        // const handleCancelReply = () => {
        //     setShowForm(false)
        //     // setReplyToReply(null)
        // }
        // const handleReply = () => {
        //     onReplyReply(reply)
        // }
    if(reply.user.username === data.currentUser.username){
        const handleDelete = () => {
            onDelete(reply)
          }
        return(
            <>
            <div className="reply_container">
                <div className="score">
                    <svg className="math_icons" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
                    <p className="score_points">{reply.score}</p>
                    <svg className="math_icons" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg>
                </div>
                <div className="comment">
                    <div className="above_comment_section">
                        <div className="img_date">
                            <img className="profile" src={reply.user.image.png} alt="profile user" />
                            <p className="username">{reply.user.username}</p>
                            <p className="createdAt"> {reply.createdAt}</p>
                        </div>
                        <div className="btns">
                        <div className="delete_button" onClick={handleDelete}>
                        <svg width="12" height="14" className="delete_icon" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"/></svg>
                                <p className="saying delete_icon_say">delete</p>
                            </div>
                            <div className="edit_button">
                            <svg width="14" height="14" className="edit_icon" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"/></svg>
                                <p className="saying edit_icon_say">edit</p>
                            </div>
                        </div>    
                    </div>
                    <div className="content">
                    <p className="comment_content">
                        <span className="replyTo">@{reply.replyingTo}</span>
                        {reply.content}
                    </p>
                    </div>
                </div>
            </div>
            </>
        )
    }else{ 
    return(
        <>
            <div className="reply_container">
                <div className="score">
                    <svg className="math_icons" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"/></svg>
                    <p className="score_points">{reply.score}</p>
                    <svg className="math_icons" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"/></svg>
                </div>
                <div className="comment">
                    <div className="above_comment_section">
                        <div className="img_date">
                            <img className="profile" src={reply.user.image.png} alt="profile user" />
                            <p className="username">{reply.user.username}</p>
                            <p className="createdAt"> {reply.createdAt}</p>
                        </div>
                        <div className="reply_button" onClick={handleReply}>
                        <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                        <p className="reply_saying">Reply</p>
                        </div>
                    </div>
                    <div className="content">
                    <p className="comment_content">
                        <span className="replyTo">@{reply.replyingTo}</span>
                        {reply.content}
                    </p>
                    </div>
                </div>
            </div>
            {/* if the show form is on
            {showForm && (
            <Form reply={reply} onCancel={handleCancelReply} onReply={handleAddReply}/>
            )} */}
        </>
    )
}
}
export default Replies;