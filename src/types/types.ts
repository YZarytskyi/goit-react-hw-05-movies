export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: {id: number, name: string}[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Actor {
  id: number;
  character: string;
  name: string;
  profile_path: string;
}

export interface Review {
  id: string;
  author_details: {}
  author: string;
  content: string;
  created_at: string;
}

export interface OutletContext {
  movieId: string;
}
