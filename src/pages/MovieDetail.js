import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { movieState } from "../movieState";

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
    console.log(currentMovie);
    setMovie(currentMovie);
    //this dependencies are important because I'm working with url, and if the url changes, my useEffect need to change too.
  }, [movies, movieId]);
  if (!movie) {
    return <h1>Not Find</h1>;
  }
  return (
    <Details>
      <Headline>
        <h1>{movie.title}</h1>
        <img src={movie.mainImg} alt={movie.title} />
      </Headline>
      <Awards>
        {movie.awards.map((award) => (
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
  );
};

const Details = styled.div`
  color: white;
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
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
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
