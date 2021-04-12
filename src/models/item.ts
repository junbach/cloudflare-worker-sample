export interface Item {
  id: string;
  name: string;
  desc: string;
  type: ItemType;
}

enum ItemType {
  Equipment,
  Medicine,
  Book,
  Quest,
}
