type Book = {
  id: number;
  title: string;
  book_covers: Cover[];
};

type Cover = {
  id: number;
  URL: string;
};
