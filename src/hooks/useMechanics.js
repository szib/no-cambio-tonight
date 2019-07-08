import useAPI from './useAPI';

const initialData = {
  mechanics: []
};

const useMechanics = () => {
  let url = `http://localhost:3030/api/v1/mechanics`;
  const API = useAPI(url, initialData);

  API.options = API.data.mechanics.map(mech => {
    return { key: mech.id, text: mech.name, value: mech.bgaId };
  });

  return API;
};

export default useMechanics;
