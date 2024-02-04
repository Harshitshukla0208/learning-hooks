import './css/tweet.css'

function Tweet({content, likeCount, createdAt}) {
    return (
        <div className='tweet-wrapper'>
            <div className="tweet-content">
                {content}
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