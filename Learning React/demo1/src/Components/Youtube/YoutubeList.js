import React from 'react';
import { YoutubeData } from '../../Data/YoutubeData';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
    console.log(props);
    return (
        <div className="youtube-list">
            {YoutubeData.map((item,index) => (
                <YoutubeItem
                    key = {item.id}
                    image = {item.image}
                    avatar = {item.avatar}
                    title = {item.title}
                    author = {item.author}
                />
            ))}
        </div>
    );
};

export default YoutubeList;