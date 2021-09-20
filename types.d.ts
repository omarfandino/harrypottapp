type Book = {
  id: number;
  title: string;
  book_covers: Cover[];
  place_years: Array<String>;
  publish_date: any;
  author: string;
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
  author: string;
  publish_date: string;
};
