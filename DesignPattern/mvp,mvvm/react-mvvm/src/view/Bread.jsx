import styled from "styled-components";
import whiteHeart from "../assets/images/icons8-white-heart-96.png";
import purpleHeart from "../assets/images/icons8-purple-heart-96.png";
const Bread = (props) => {
  const {
    bread: { id, name, isFavorite },
    handleClickFavorite,
  } = props;

  const handleToggleHeart = () => {
    handleClickFavorite(id);
  };
  return (
    <StBreadLi>
      {name}

      {isFavorite ? (
        <img
          src={purpleHeart}
          alt="not_favorite_heart"
          onClick={handleToggleHeart}
        />
      ) : (
        <img
          src={whiteHeart}
          alt="favorite_heart"
          onClick={handleToggleHeart}
        />
      )}
    </StBreadLi>
  );
};

export default Bread;

const StBreadLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  padding: 1rem;
  list-style: none;

  border-radius: 1rem;
  background-color: #ffd4d4;

  & > img {
    width: 2rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
