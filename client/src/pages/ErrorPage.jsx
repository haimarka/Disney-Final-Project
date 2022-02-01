import React from 'react';

export default function ErrorPage() {
  return (
        <div>
            <h1>page not Found 404</h1>
            <img src="https://xiaoyuew.com/img/outage/1.png" alt="page not found" />
            <iframe 
                autoPlay 
                loop
                width="700" 
                height="400" 
                src="https://www.youtube.com/embed/KnTJksB2Dxs" 
                title="YouTube video player"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
  );
}
