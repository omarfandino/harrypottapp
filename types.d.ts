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
  birth: string;
  death: string;
  species: string;
  ancestry: string;
  gender: string;
  hair_color: string;
  eye_color: string;
};
