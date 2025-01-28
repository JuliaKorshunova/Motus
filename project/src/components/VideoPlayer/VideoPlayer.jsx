import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch('http://localhost:3001/');
                if (!response.ok) {
                    throw new Error(`Сервер вернул статус: ${response.status}`);
                }
                // Установите URL для HLS
                setVideoUrl('/test/output.m3u8');

            } catch (error) {
                console.error('Ошибка при получении видео:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideo();
    }, []);

    // Воспроизведение HLS
    useEffect(() => {
        if (videoUrl && videoRef.current) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(videoUrl);
                hls.attachMedia(videoRef.current);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    videoRef.current.play();
                });
            } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
                videoRef.current.src = videoUrl;
                videoRef.current.addEventListener('loadedmetadata', () => {
                    videoRef.current.play();
                });
            }
        }
    }, [videoUrl]);

    return (
        <div>
            {loading ? <p>Загрузка видео...</p> : (
                <video ref={videoRef} controls width="640" height="360"></video>
            )}
        </div>
    );
};

export default VideoPlayer;