import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  asyncAddGameToMyGameLibray,
  asyncRemoveGameFromMyGameLibray
} from '../../redux/thunk/myGames';

import { Image, Grid, Header, Segment } from 'semantic-ui-react';

import GameDetails from './GameDetails';
import AddRemoveButton from './AddRemoveButton';

const Game = props => {
  const { game, gamePieceId } = props;
  const dispatch = useDispatch();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const addGame = () => {
    setIsButtonLoading(true);
    dispatch(asyncAddGameToMyGameLibray(game.bgaId)).then(gamePiece => {
      setIsButtonLoading(false);
    });
  };

  const removeGame = () => {
    setIsButtonLoading(true);
    dispatch(asyncRemoveGameFromMyGameLibray(gamePieceId)).then(() => {
      setIsButtonLoading(false);
    });
  };

  return (
    <Segment>
      <Grid columns={2} celled="internally">
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={game.imageSmall} size="tiny" />
            <Header>{game.name}</Header>
            <GameDetails game={game} />
            {game.numberOfOwners && (
              <div>{game.numberOfOwners} member(s) has a copy.</div>
            )}
            <AddRemoveButton
              loading={isButtonLoading}
              gamePieceId={gamePieceId}
              addHandler={addGame}
              removeHandler={removeGame}
            />
          </Grid.Column>

          <Grid.Column>
            <div dangerouslySetInnerHTML={{ __html: game.description }} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Game;
