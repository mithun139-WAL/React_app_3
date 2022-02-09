import { tab } from "@testing-library/user-event/dist/tab";
import PropTypes from "prop-types";
import { useState } from "react";
const Forum = (props) => {
    let [comments, setComments] = useState([]);
    const addComments = (event) => {
        event.preventDefault();
        let commentObject = {
            body: event.target.body.value,
            author: event.target.author.value,
        };
        let newComments = [...comments, commentObject];
        setComments(newComments);
    };
    //    function showReplies(event){
    //        for(let i=0;i<comments.length;i++){
    //            document.querySelector("#demo").innerHTML +=`
    //            <tr><td>${comments[i].author}</td><td>${comments[i].body}</td></tr>
    //            `;
    //        }
    //    }
    return (
        <div className="Todo">
            <h1>Topic- {props.topic}</h1>
            <form onSubmit={addComments}>
                <textarea name="body" placeholder="Enter Comment"></textarea><br />
                <input type="text" name="author" placeholder="Enter Author Name" /><br />
                <br />
                <button>Add Comment</button>
            </form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Reply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((val, index) => {
                                return <tr>
                                    <td><h4>{val.author}</h4></td>
                                    <td>{val.body}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

Forum.propTypes = {
    topic: PropTypes.string,
}

export default Forum;