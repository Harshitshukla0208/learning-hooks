import TweetList from './TweetList';
import AddTweet from './AddTweet';
import { useState } from 'react';

const initialDummyTweets = [
    {id: 0, content: 'we have a new twitter called as threads', likeCount: 69, createdAt: new Date()},
    {id: 1, content: 'whats going on in india', likeCount: 6900, createdAt: new Date()},
    {id: 2, content: 'boycott !!', likeCount: 69000, createdAt: new Date()}
]

function Twitter() {
    const [tweets, setTweets] = useState(initialDummyTweets);
    const handleAddTweet = (text) => {
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0;
        setTweets([...tweets, {
            content: text,
            likeCount: Math.floor(Math.random()*20), // this is a random like count
            id: nextId,
            createdAt: new Date()
        }])
    }

    const handleEditTweet = (tweet) => {
        setTweets(
            tweets.map((currentTweet) => {
                if(currentTweet.id === tweet.id){
                    return tweet; // this tweet is updated tweet
                }
                else{
                    return currentTweet;
                }
            } )
        )
    }

    const sortTweets = () => {
        tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
    }

    return (
        <div>
            <AddTweet onAddTweet={handleAddTweet} />
            <button onClick={sortTweets}>
                Sort Tweet By CreatedAt
            </button>
            <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
        </div>
    )
}
export default Twitter;