import useAPI from './useAPI';

const initialData = {
  mechanics: []
};

const useMechanics = () => {
  let url = `http://localhost:3030/api/v1/mechanics`;
  const API = useAPI(url, initialData);

  return API;
};

export default useMechanics;
