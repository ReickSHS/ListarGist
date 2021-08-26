import React from "react";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router";
import { Button, H1, Divbtncontainer, Divbtnrepos,A } from "./styles";

const HomeContainer = ({ history }) => {
  const searchUrl= (url)=>{
    
    history.push(url)
  }
  return (
    <>
      <Container maxWidth="xl" className="main-box">
        <H1><A href="/" target="_self">Selecciona tu preferencia</A></H1>
        <Divbtncontainer className="btnContainer">
        < Divbtnrepos className="btn_repos">
        <Button type = 'button' onClick={()=> searchUrl("/reposUsers")}>Repositorios del usuario</Button>
        </Divbtnrepos>
        <Divbtnrepos className="btn_allUsers">
        <Button type='button' onClick={()=> searchUrl("/usersList")}>Listar usuarios</Button>
        </Divbtnrepos>
        <Divbtnrepos className="btn_user">
        <Button type='button' onClick={()=> searchUrl("/candidate")}>Consultar por Candidato</Button>
        </Divbtnrepos>
        </Divbtncontainer>
      </Container>
    </>
  );
};

export default withRouter(HomeContainer);
