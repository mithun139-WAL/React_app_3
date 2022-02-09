import { useState } from "react";
const Ecommerce = () => {
    let [comments, setComments] = useState([]);
    const addComments = (event) => {
        event.preventDefault();
        let commentObject = {
            title: event.target.title.value,
            body: event.target.body.value,
            author: event.target.author.value,
            submitdate: event.target.submitdate.value,
        };
        let newComments = [...comments, commentObject];
        setComments(newComments);
    };
    let deleteComment = (indexToDelete) => {
        let newComments = comments.filter(function (val, index) {
            if (indexToDelete === index) {
                return false;
            }
            return true;
        });
        setComments(newComments);
    }
    return (
        <div className="Todo">
            <h1>Comment Section</h1>
            <form onSubmit={addComments}>
                <input type="text" name="title" placeholder="Comment Title" /><br />
                <textarea name="body" placeholder="Enter Comment"></textarea><br />
                <input type="text" name="author" placeholder="Enter Author Name" /><br />
                <input type="date" name="submitdate" />
                <br />
                <button>Add Comment</button>
            </form>
            {
                comments.map((val, index) => {
                    return <div className="border">
                        <h3>Title:{val.title}</h3><br />
                        Comment:{val.body}<br />
                        Author:{val.author}<br />
                        SubmissionDate:{val.submitdate}<br />
                        <button onClick={() => {
                            deleteComment(index);
                        }}>Delete Comment</button>
                    </div>
                })
            }
        </div>
    );
}

export default Ecommerce;