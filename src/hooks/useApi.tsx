export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode",
}

export interface SearchResult {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

export const useApi = () => {
  let url = "https://www.omdbapi.com/";
  let apiKey = "35af6edf";

  const searchData = async (
    title: string,
    type: SearchType
  ): Promise<SearchResult[]> => {
    const result = await fetch(
      `${url}?s=${encodeURI(title)}&type=${type}&apiKey=${apiKey}`
    );
    return result.json();
  };

  const getDetails = async (id: string): Promise<SearchResult> => {
    const result = await fetch(`${url}?i=${id}&plot=full&apiKey={apiKey}`);
    return result.json();
  };

  return {
    searchData,
    getDetails,
  };
};

export default useApi;
