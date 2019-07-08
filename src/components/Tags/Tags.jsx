import React from 'react';
import Tag from './Tag';

const Tags = ({ game }) => {
  const { categories, mechanics } = game;

  const getPlayers = () => {
    if (game.minPlayers === game.maxPlayers) {
      return `${game.minPlayers} players`;
    } else {
      return `${game.minPlayers} - ${game.maxPlayers} players`;
    }
  };

  const playtimeTag =
    game.minPlaytime && game.maxPlaytime ? (
      <Tag
        name={`${game.minPlaytime} - ${game.maxPlaytime} minutes`}
        color="blue"
        iconName="clock"
      />
    ) : null;

  const playersTag =
    game.minPlayers && game.maxPlayers ? (
      <Tag name={getPlayers()} color="blue" iconName="user" />
    ) : null;

  return (
    <>
      {playtimeTag}
      {playersTag}
      {categories &&
        categories.map(category => (
          <Tag name={category.name} color="teal" iconName="tag" />
        ))}
      {mechanics &&
        mechanics.map(mechanic => (
          <Tag name={mechanic.name} color="yellow" iconName="settings" />
        ))}
    </>
  );
};

export default Tags;
