import { useState } from "react";
import { axiosInstance } from "../plugins/axios";

const initialParameters = {
  search: "",
};
const useGif = () => {
  const [parameters, setParameters] = useState({ ...initialParameters });
  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    try {
      setGifs([
        {
          category: parameters.search,
          isLoading: true,
          gifs: [],
        },
        ...gifs,
      ]);

      const response = await axiosInstance.get(
        `search?q=${parameters.search}&api_key=me1yLZGwdYvoCyWVegIUmTvWcCIgxGW6`
      );

      setGifs((prevGifs) => {
        return prevGifs.map((gif) => {
          if (gif.category === parameters.search) {
            return {
              ...gif,
              gifs: response.data.data,
            };
          }
          return gif;
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      setGifs((prevGifs) => {
        return prevGifs.map((gif) => {
          if (gif.category === parameters.search) {
            return {
              ...gif,
              isLoading: false,
            };
          }
          return gif;
        });
      });
    }
  };

  return {
    parameters,
    setParameters,
    getGifs,
    gifs,
  };
};

export default useGif;
