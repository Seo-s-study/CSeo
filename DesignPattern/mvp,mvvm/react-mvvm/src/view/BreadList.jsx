import Bread from "./Bread";
import styled from "styled-components";

const BreadList = (props) => {
  const { breadList, handleClickFavorite } = props;
  return (
    <StBreadListWrapper>
      <header>
        <h2>π ννκ° μ‘°μνλ λΉ΅ π</h2>
      </header>
      {breadList.map((bread) => (
        <Bread
          key={bread.id}
          bread={bread}
          handleClickFavorite={handleClickFavorite}
        />
      ))}
    </StBreadListWrapper>
  );
};

export default BreadList;

const StBreadListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  > header {
    color: #ea8fea;
  }
`;
