import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context";
import axios from "axios";
import customFetch from "../utils";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["gallery", searchTerm],
    queryFn: async () => {
      const result = await customFetch.get(`/photos?query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>An error occured...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    <section className="image-container">
      <h4>No results found...</h4>
    </section>;
  }

  return (
    <div className="image-container">
      {results.map((item) => {
        const { thumb } = item.urls;
        return <img key={item.id} src={thumb} className="img" />;
      })}
    </div>
  );
};

export default Gallery;
