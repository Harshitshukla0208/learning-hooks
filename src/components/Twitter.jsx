import TweetList from './TweetList';
import AddTweet from './AddTweet';
import { useState } from 'react';

const initialDummyTweets = [
    {id: 0, content: 'we have a new twitter called as threads', likeCount: 69},
    {id: 1, content: 'whats going on in india', likeCount: 6900},
    {id: 2, content: 'boycott vimal kumar meena', likeCount: 69000}
]

function Twitter() {
    const [tweets, setTweets] = useState(initialDummyTweets);
    const handleAddTweet = (text) => {
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0;
        setTweets([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random()*20), // this is a random like count
            id: nextId
        }])
    }
    return (
        <div>
            <AddTweet onAddTweet={handleAddTweet} />
            <TweetList tweets={tweets} />
        </div>
    )
}
export default Twitter;