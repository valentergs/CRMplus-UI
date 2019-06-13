import React, { useContext, useRef, useEffect } from "react";
import CRMplusContext from "../../Context/crmplus/crmplusContext";

const UsuariosFilter = () => {
  const crmplusContext = useContext(CRMplusContext);
  const text = useRef("");
  const { filterUsuario, clearFilter, filtered } = crmplusContext;

  const onChange = e => {
    if (text.current.value !== "") {
      filterUsuario(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filtrar usuarios..."
        onChange={onChange}
      />
    </form>
  );
};

export default UsuariosFilter;
