import React from 'react';
import useCategories from '../../hooks/useCategories';
import useMechanics from '../../hooks/useMechanics';

import Loader from '../../components/LoaderWithDimmer';

const RecommendGamesPage = () => {
  const mechanicsAPI = useMechanics();
  const categoriesAPI = useCategories();

  if (mechanicsAPI.isLoading || categoriesAPI.isLoading) return <Loader />;

  return <div>Loaded</div>;
};

export default RecommendGamesPage;
