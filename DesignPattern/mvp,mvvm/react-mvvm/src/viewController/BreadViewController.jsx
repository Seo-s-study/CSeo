import { useCallback } from "react";
import BreadList from "../view/BreadList";

const BreadViewController = (props) => {
  const { breadViewModel } = props;

  const handleClickFavorite = useCallback(
    (breadId) => {
      breadViewModel.isFavoriteBread(breadId);
    },
    [breadViewModel]
  );

  return (
    <BreadList
      breadList={breadViewModel.getBreadList()}
      handleClickFavorite={handleClickFavorite}
    />
  );
};

export default BreadViewController;
