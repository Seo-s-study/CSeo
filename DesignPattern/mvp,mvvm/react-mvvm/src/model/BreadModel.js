class BreadModel {
  constructor() {
    this.breadList = [
      { id: 1, name: "앙버터", isFavorite: true },
      { id: 2, name: "흑임자크림빵", isFavorite: true },
      { id: 3, name: "치아바타", isFavorite: true },
      { id: 4, name: "스콘", isFavorite: true },
      { id: 5, name: "마들렌", isFavorite: true },
    ];
  }
  getBreadList() {
    return this.breadList;
  }
  isFavoriteBread(selectId) {
    this.breadList = this.breadList.map((bread) =>
      bread.id === selectId
        ? { id: bread.id, name: bread.name, isFavorite: !bread.isFavorite }
        : bread
    );
  }
}
export default BreadModel;
