import React from "react";
import Container from "@material-ui/core/Container";

const HomeContainer = () => {
  return (
    <>
      <Container maxWidth="xl" className="main-box">
        <h1>Selecciona tu preferencia</h1>
        <button>Listar usuarios</button>
        <button>Consultar por Candidato</button>
      </Container>
    </>
  );
};

export default HomeContainer;
