import React from "react";
import emojis from "../data/emojis.json";

function Emoji(props) {

    const { emojiName , location}=props;
    const handleEmojiClick = () => {
        // Handle heart click action
        alert(emojiName+" clicked");
      };

    return (
        <>
            <div className={location} onClick={handleEmojiClick} >
                {
                    emojis.map(item=>(
                        item.name==emojiName && item.emoji
                    ))
                }
            </div>
        </>
    );
}

export {Emoji};

