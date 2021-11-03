import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { MovieState } from '../movieState';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  //The Entire List of Movies Object
  const [movies, setMovies] = useState(MovieState);
  //Each individual Movie
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    //movies.filter() is used to sort through the MovieState object and create a movie for each one
    //This still leaves this as an object
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  console.log(movie);

  return (
    //added a fraction tag around to add a function
    <>
      {movie && (
        <StyledDetails>
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='poo' />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt='' />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled.div`
  color: white;
`;
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    right: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    min-height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default MovieDetail;
