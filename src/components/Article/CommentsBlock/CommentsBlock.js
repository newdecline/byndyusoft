import React from 'react';
import {observer} from "mobx-react";
import {commentsStore} from "../../../mobxStore/CommentsStore";
import {StyledCommentsBlock} from "./styled";
import {Comment} from "./Comment/Comment";

export const CommentsBlock = observer(() => {
  const hasComments = commentsStore.comments.length !== 0;

  return <StyledCommentsBlock>
    <div className="title-block">{hasComments ? 'Комментарии:' : 'Комментариев пока нет'}</div>

    {commentsStore.comments.map(comments => {
      return <Comment
        key={comments.id}
        commentsId={comments.id}
        {...comments}/>})}
  </StyledCommentsBlock>
});