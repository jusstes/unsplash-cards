import React from 'react';

function Filter({ isLikedCards, setIsLikedCards }) {
  const handleChangeRadio = () => {
    setIsLikedCards(!isLikedCards);
  };

  return (
    <div className="filter">
      <p className="filter__text">Показать избранные карточки</p>
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={handleChangeRadio}
      />
    </div>
  );
}

export default Filter;
