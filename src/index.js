import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Desafio transformar isso no jogo da imersão game dev
const Pagina404 = () => (
  <div> 
    <h2>Ops! Page Not Found.</h2>
    <img src="https://images.vexels.com/media/users/3/134551/isolated/preview/1fb74455a668b00b9ec2ab7d3092008b-emoticon-emoji-triste-by-vexels.png" alt="Emoji erro 404" />
  </div>
)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);