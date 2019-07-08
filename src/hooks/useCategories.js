import useAPI from './useAPI';

const initialData = {
  categories: []
};

const useCategories = () => {
  let url = `http://localhost:3030/api/v1/categories`;
  const API = useAPI(url, initialData);

  return API;
};

export default useCategories;
