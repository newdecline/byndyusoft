import React from 'react';
import {Normalize} from "styled-normalize";
import {GlobalStyle} from "./GlobalStyle";
import {Article} from "./components/Article/Article";
import {StyledContainer} from "./components/atoms/StyledContainer";
import {articlesStore} from "./mobxStore/ArticleStore";
import {BrowserRouter} from 'react-router-dom';

export const App = () => {
  return <BrowserRouter>
    <Normalize/>
    <GlobalStyle/>
    <StyledContainer>
      {articlesStore.articles.map(articleData => {
        return <Article
          key={articleData.id}
          {...articleData}/>
      })}
    </StyledContainer>
  </BrowserRouter>
};