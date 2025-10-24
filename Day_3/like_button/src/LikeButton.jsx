import React from 'react'
import  {useState} from 'react'

function LikeButton () {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleLikeClick = () => {
        if (isButtonDisabled) {
            return;
        }
        setIsLiked(!isLiked);
        setLikeCount(prevCount => prevCount + (isLiked ? -1 : 1));  
        setIsButtonDisabled(true);

        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 1000);
    };

    const buttonText = isLiked ? 'Liked' : 'Like';
    const buttonEmoji = isLiked ? '❤️' : '🤍';
    const buttonStyle = {
        color: isLiked ? 'blue' : 'black',
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer' 
    }
  return (
    <div>
        <button onClick={handleLikeClick} style={buttonStyle} disabled={isButtonDisabled}>{buttonEmoji} {buttonText}</button>
        <span>{likeCount} likes</span>
    </div>
  )
}

export default LikeButton