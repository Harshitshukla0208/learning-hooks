import { useState } from "react";
import './css/addTweet.css'

function AddTweet({onAddTweet}) {
    const [text, setText] = useState("");
    return (
        <div className="add-tweet">
            <input className="input-bar"
                type="text" 
                placeholder="Add new tweet..." 
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button className="add-btn" onClick={() => {
                onAddTweet(text)
                setText('') //after clicking button every thing is cleared out from the input bar
            }}>
                Tweet !!
            </button>
        </div>
    )
}
export default AddTweet;