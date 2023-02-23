import { useState } from "react";
import BreadModel from "../model/BreadModel";
import BreadViewController from "../viewController/BreadViewController";
import BreadListViewModel from "../viewModel/BreadListViewModel";

const BreadListProvider = () => {
  const breadModel = new BreadModel();
  const [breadViewModel] = useState(new BreadListViewModel(breadModel));

  return <BreadViewController breadViewModel={breadViewModel} />;
};

export default BreadListProvider;
