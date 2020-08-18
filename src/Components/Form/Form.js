import React, {Component} from 'react';

class Form extends Component {
    render(){
        return(
            <div className="newPostMain">
                Title:
                <input/>
                <img/>
                Image URL:
                <input/>
                Content:
                <input className="newPostContent"/>
                <div className="postBox">
                    <button> Post </button>
                </div>
            </div>
        )
    }
};


export default Form