import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className = "youtube-item">      
            <div className = "youtube-image">
                <img src = {props.image} alt = ""/>
            </div>
            <div className = "youtube-footer">
                <img className = "youtube-avatar" src = {props.avatar} alt = ""/>
                <div className = "youtube-info">
                    <div className = "youtube-title">
                        <h3>{props.title}</h3>
                    </div>
                    <div className = "youtube-author">
                        <h3>{props.author}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YoutubeItem;