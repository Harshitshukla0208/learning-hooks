import Tweet from "./Tweet";
import {memo} from 'react';
import './css/tweetList.css';

const MemoisedTweet = memo(Tweet);

function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function TweetList({tweets, onEditTweet}) {
    return (
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li key={tweet.id}>
                        <MemoisedTweet 
                            tweetId = {tweet.id}
                            content={tweet.content}
                            likeCount={tweet.likeCount}
                            createdAt={formatDate(tweet.createdAt)}
                            onEdit = {onEditTweet}
                        />
                    </li>
                ))
            }
        </ul>
    )
}
export default TweetList;
