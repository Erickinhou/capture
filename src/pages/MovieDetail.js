import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { movieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, simpleFade } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const { id: movieId } = useParams();
  const [movies, setMovies] = useState(movieState);
  const [movie, setMovie] = useState(null);
  //UseEffect
  useEffect(() => {
    const [currentMovie] = movies.filter(
      (stateMovie) => stateMovie.id === movieId
    );
    setMovie(currentMovie);
    //this dependencies are important because I'm working with url, and if the url changes, my useEffect need to change too.
  }, [movies, movieId]);
  if (!movie && movie !== null) {
    return (
      <NotFind
        variants={simpleFade}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        Not Find
      </NotFind>
    );
  }
  return (
    <>
      {movie !== null && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie?.title}</h2>
            <img src={movie?.mainImg} alt={movie?.title} />
          </Headline>
          <Awards>
            {movie?.awards?.map((award) => (
              <Award
                title={award?.title}
                description={award?.description}
                key={award?.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const NotFind = styled(motion.h1)`
  color: white;
  width: 100%;
  text-align: center;
  margin-top: 10vh;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media screen and (max-width: 1300px) {
    height: 100vh;
    padding-top: 0vh;
    position: relative;
    h2 {
      position: relative;
      display: block;
      text-align: center;
      padding: 10px 0;
      top: 0%;
      left: 0%;
      transform: translate(0%, 0%);
    }
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`;

const StyleAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
  @media screen and (max-width: 1300px) {
    padding: 2rem 4rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award component
const Award = ({ title, description }) => {
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className="line" />
      <p>{description}</p>
    </StyleAward>
  );
};
export default MovieDetail;
