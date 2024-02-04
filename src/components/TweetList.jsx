import Tweet from "./Tweet";
import './css/tweetList.css';

function TweetList({tweets}) {
    return (
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li>
                        <Tweet content={tweet.content} likeCount={tweet.likeCount} />
                    </li>
                ))
            }
        </ul>
    )
}
export default TweetList;