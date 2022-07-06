import React, { useState } from 'react'
import { Comments, FacebookProvider, Share } from 'react-facebook';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { Button } from '@mui/material';
import "../App.css";

const Comment = () => {
    return (
        <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID} >
            <Comments href="http://www.facebook.com" />
        </FacebookProvider>
    )
}

const SocialActions = () => {
    const [showComment, setShowComment] = useState(false);
    const [like, setLike] = useState(false);

    return (
        <div className='socials'>
            <hr />
            <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
                {showComment === false && (
                    <>
                        <Button onClick={() => setLike(!like)}>
                            {
                                like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />
                            }
                        </Button>
                        <Share href="http://www.facebook.com">
                            {({ handleClick, loading }) => (
                                <Button disabled={loading} onClick={handleClick}>
                                    <ShareOutlinedIcon />
                                </Button>
                            )}
                        </Share>
                        <Button onClick={() => setShowComment(!showComment)}>
                            <ModeCommentOutlinedIcon />
                        </Button>
                    </>
                )}

                {showComment && <div><Comment /></div>}
            </FacebookProvider>
            <hr />
        </div>
    )
}

export default SocialActions