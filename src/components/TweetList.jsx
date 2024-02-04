import Tweet from "./Tweet";
import './css/tweetList.css';

function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function TweetList({tweets}) {
    return (
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li key={tweet.id}>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount} createdAt={formatDate(tweet.createdAt)} />
                    </li>
                ))
            }
        </ul>
    )
}
export default TweetList;
