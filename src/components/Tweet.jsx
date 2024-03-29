import { useState } from 'react';
import './css/tweet.css'

function Tweet({tweetId, content, likeCount, createdAt, onEdit}) {
    const [isEditting, setIsEditting] = useState(false);
    return (
        <div className='tweet-wrapper'>
            
            <div className='tweet-edit-wrapper'>
                <div className="tweet-content">
                    {(isEditting) ? <input type='text' value={content} onChange={(e) => {
                        onEdit({
                            id: tweetId,
                            content: e.target.value,
                            likeCount: likeCount,
                            createdAt: createdAt
                        })
                    }} /> : content}
                </div>
                <div className="edit-btn" onClick={() => setIsEditting(!isEditting)}>
                    <button>{(isEditting) ? 'Save' : 'Edit'}</button>
                </div>
            </div>


            <div className="like-createdAt-wrapper">
                <div className="likes">
                    {likeCount} likes
                </div>
                <div className="created-at">
                    Tweeted at {createdAt}
                </div>
            </div>
        </div>
    )
}
export default Tweet;