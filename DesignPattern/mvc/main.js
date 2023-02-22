const model = {
  items: [1, 2],
  lastID: 2,
};

const controller = {
  add() {
    const id = ++model.lastID;
    model.items.push(id);
    view.render();
  },

  remove(id) {
    const index = model.items.indexOf(parseInt(id));

    if (index >= 0) {
      model.items.splice(index, 1);
      view.render();
    }
  },

  getItems() {
    return model.items;
  },

  init() {
    view.init();
  },
};

const view = {
  init() {
    const addButton = document.getElementById("addBtn");

    addButton.addEventListener("click", controller.add);

    this.list = document.getElementsByTagName("ul")[0];

    this.list.addEventListener("click", (e) => {
      const itemID = e.target.parentNode.dataset.id;
      controller.remove(itemID);
    });

    this.render();
  },

  render() {
    const items = controller.getItems();

    this.list.innerHTML = "";

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.dataset.id = item;

      const removeButton = document.createElement("button");
      removeButton.className = "remove-item";
      removeButton.textContent = "X";

      li.appendChild(removeButton);
      this.list.appendChild(li);
    });
  },
};

controller.init();
