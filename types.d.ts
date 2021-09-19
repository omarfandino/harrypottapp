type Book = {
  id: number;
  title: string;
  book_covers: Cover[];
};

type Cover = {
  id: number;
  URL: string;
};

type Character = {
  id: number;
  name: string;
  house: string;
};
