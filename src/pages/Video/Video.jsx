import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Video.module.css';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { nanoid } from 'nanoid';

function VideoPage() {
  const [video, setVideo] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieVideo = async () => {
      try {
        const data = await movieAPI.getVideoMovies(movieId);
        setVideo(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieVideo();
  }, [movieId]);

  if (!video) {
    return <Loader />;
  }
  return (
    <>
      <ul className={css.VideoList}>
        {video.length > 0 ? (
          video.map(element => {
            let { key, name } = element;
            let urlVideo = `https://www.youtube.com/embed/${key}`;
            return (
              <li key={nanoid()}>
                <iframe
                  width="300"
                  height="200"
                  src={urlVideo}
                  title={name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </li>
            );
          })
        ) : (
          <p>Unfortunately there is no trailer for this movie.</p>
        )}
      </ul>
    </>
  );
}
export default VideoPage;
