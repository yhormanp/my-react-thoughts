import React from "react";
import FilterLink from '../containers/FilterLink'

function Footer() {
  return (
    <div>
      <p>
        Show: <FilterLink filter="SHOW_ALL">Todos</FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">Activo</FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">Completado</FilterLink>
      </p>
    </div>
  );
}

export default Footer;
