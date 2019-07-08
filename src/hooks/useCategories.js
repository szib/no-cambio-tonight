import useAPI from './useAPI';

const initialData = {
  categories: []
};

const useCategories = () => {
  let url = `http://localhost:3030/api/v1/categories`;
  const API = useAPI(url, initialData);

  API.options = API.data.categories.map(category => {
    return { key: category.id, text: category.name, value: category.bgaId };
  });

  return API;
};

export default useCategories;
