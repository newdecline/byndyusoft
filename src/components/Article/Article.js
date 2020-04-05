import React from 'react';
import {StyledArticle} from "./styled";
import {CommentsBlock} from "./CommentsBlock/CommentsBlock";
import {observer} from "mobx-react";
import {CommentForm} from "../forms/CommentForm/CommentForm";
import {commentsStore} from "../../mobxStore/CommentsStore";
import Collapsible from "react-collapsible";

export const Article = observer(props => {
  const {name, date, articleText} = props;
  const isShowForm = commentsStore.idsComments.length === 0;

  return <StyledArticle>
    <h5 className="article-title">{name.slice(0, 110)}...</h5>
    <div className="article-timestamp">{date}</div>

    <div className="article-body">
      {articleText}
    </div>

    <CommentsBlock/>

    <Collapsible
      transitionTime={100}
      easing='ease-in-out'
      open={isShowForm}
      trigger={''}>
      <CommentForm/>
    </Collapsible>

  </StyledArticle>
});