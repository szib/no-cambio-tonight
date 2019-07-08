import useAPI from './useAPI';

const initialData = {
  id: null,
  owner_id: null,
  game_id: null,
  game: {},
  categories: [],
  mechanics: []
};

const useMyGame = id => {
  let url = `http://localhost:3030/api/v1/mygames/${id}`;
  const gamePieceAPI = useAPI(url, initialData);

  return gamePieceAPI;
};

export default useMyGame;
