class BreadListViewModel {
  constructor(breadList) {
    this.breadStore = breadList;
  }
  getBreadList() {
    return this.breadStore.getBreadList();
  }
  isFavoriteBread(breadId) {
    this.breadStore.isFavoriteBread(breadId);
  }
}
export default BreadListViewModel;
