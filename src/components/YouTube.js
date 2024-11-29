import React from 'react';

export default function YouTube ({ id }){
    return (
        <iframe
          width="100%"
          style={{"aspect-ratio": "16/9"}}
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
    );
  };