import React, { useEffect, useState } from 'react';
import ImagePortrait from './ImagePortrait.styled';

export default ({ src, alt, title, width, height }) => {

    const [loaded, setLoaded] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);


    useEffect(() => {
        setImgSrc(src);
    }, [src])


    return (
        <ImagePortrait className="shadow">
            {src ?
                <img
                    className={loaded ? 'loaded' : 'loading'}
                    src={imgSrc}
                    alt={alt}
                    title={title}
                    onLoad={() => setLoaded(true)}
                    onError={() => setLoaded(false)}
                    height={height}
                    width={width}
                /> : null}
            { src ? <div className={loaded ? 'loader hidden' : 'loader'}></div> : null }
        </ImagePortrait>
    )
}