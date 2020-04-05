import React from 'react';
import {observer} from "mobx-react";
import classnames from 'classnames';
import {StyledCommentForm} from "./styled";
import {useForm} from 'react-hook-form';
import {InputField} from "./InputField/InputField";
import {commentsStore} from "../../../mobxStore/CommentsStore";

export const CommentForm = observer(props => {
  const {commentId, onCommentPosted = () => {}} = props;

  const titleBlock = commentsStore.idsComments.length === 0
    ? 'Добавить комментарий'
    : 'Ответить на комментарий';

  const {register, handleSubmit, errors, reset} = useForm();

  const onSubmit = data => {
    commentsStore.addComment(data, commentId);
    onCommentPosted();
    reset();
  };

  return <StyledCommentForm>
    <div className="title-block">{titleBlock}</div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className={classnames({'error': errors.name})}
        type={'text'}
        component={'input'}
        ref={register({required: true})}
        name={'name'}
        label={'Имя'}/>

      <InputField
        className={classnames({'error': errors.email})}
        type={'email'}
        component={'input'}
        ref={register({required: true})}
        name={'email'}
        label={'E-mail'}/>

      <InputField
        className={classnames('textarea', {'error': errors['textComment']})}
        component={'textarea'}
        ref={register({required: true})}
        name={'textComment'}
        label={'Текст комментария'}/>

      <button type="submit" className='submit'>Добавить комментарий</button>
    </form>
  </StyledCommentForm>
});