export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export interface IUser {
  id: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number; //string
  old?: string | null;
  img: string;
  rating: number | undefined;
  slider: string[];
  collection?: boolean | null;
}

export interface IFavoriteProduct extends IProduct {
  totalPrice: number; // string
  count: number;
}

export interface IBoughtProduct extends IFavoriteProduct {
  date: number;
}

export type Inputs = {
  email: string;
};

export type BasketFrom = {
  email: string;
  location: string;
  card: string;
};

export type Input = {
  input: string;
};

export interface IServise {
  limit: number;
  page: number;
  url: string;
}
