import React from "react";
import Pagination from '../components/Funciones/Pagination'
import Pokemon from "./Pokemon";
import Spinner from "../Utils/Spinner";

const Pokedex = (props) => {
 /* La línea `const { pokemons, page, setPage, total, loading } = props;` está usando desestructuración
 asignación para extraer los valores de las propiedades `pokemons`, `page`, `setPage`, `total` y
 `cargando` desde el objeto `props`. Esto permite que el componente acceda a estos valores directamente
 sin tener que usar `props.pokemons`, `props.page`, etc.*/
  const { pokemons, page, setPage, total, loading } = props;

  /**
   * La función `lastPage` disminuye el valor de `page` en 1, pero asegura que no vaya por debajo 0.
   */
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  /**
   * La función `nextPage` incrementa el número de página actual en 1, hasta el número total máximo de
   * páginas.
   */
  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div className="Spinner-centrar">
        <Spinner />
        </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
