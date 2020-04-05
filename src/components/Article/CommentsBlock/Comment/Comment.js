import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import Collapsible from 'react-collapsible';
import {NavLink} from 'react-router-dom';
import {StyledComment} from "./styled";
import {parse} from "../../../../helpers/markdownParser";
import {CommentForm} from "../../../forms/CommentForm/CommentForm";
import {commentsStore} from "../../../../mobxStore/CommentsStore";

export const Comment = observer(props => {
  const {
    id,
    avatarUrl,
    name,
    commentTime,
    text,
    answersComments,
    className,
    rating: initRating,
    lvl
  } = props;

  const [rating, setRating] = useState(initRating);

  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    if (showForm) {
      commentsStore.changeShowReplyForm(id, 'add');
    } else {
      commentsStore.changeShowReplyForm(id, 'remove');
    }
  }, [id, showForm]);

  const changeRating = type => {
    if (type === 'decrease') {
      return setRating(prevState => prevState - 1);
    }
    setRating(prevState => prevState + 1);
  };

  const onCommentPosted = () => {
    setShowForm(prevState => !prevState);
  };

  const handleClickReplyButton = () => {
    setShowForm(prevState => !prevState);
  };

  const hideComment = rating < -10;
  const hasAnswersComments = answersComments.length !== 0;

  return <StyledComment className={className}>
    <div className="body">
      <div className="avatar">
        <img src={avatarUrl} alt="avatar"/>
      </div>
      <div className='content'>
        <div className="header">
          <NavLink to={'/'} className="name">{name}</NavLink>
          <div className="data">
            {normalizeCommentTime(commentTime).time}&nbsp;
            {normalizeCommentTime(commentTime).word}&nbsp;назад
          </div>

          <div className="rating">
            <button onClick={() => changeRating('decrease')} className="rating__item button">-</button>
            <span className="rating__item">{rating}</span>
            <button onClick={() => changeRating('add')} className="rating__item button">+</button>
          </div>

          {lvl <= 2 && <button
            onClick={handleClickReplyButton}
            className='answer-button'
          >{showForm ? 'Закрыть' : 'Ответить'}</button>}
        </div>

        <div
          className='answer-text'>
          <Collapsible
            triggerDisabled={!hideComment}
            open={!hideComment}
            trigger={'Открыть комментарий'}
            triggerWhenOpen={''}>
            <span dangerouslySetInnerHTML={{__html: parse(text)}}/>
          </Collapsible>
        </div>
      </div>
    </div>

    <Collapsible
      transitionTime={100}
      easing='ease-in-out'
      open={showForm}
      trigger={null}>
      <CommentForm commentId={id} onCommentPosted={onCommentPosted}/>
    </Collapsible>

    {hasAnswersComments && <div className="answers-comments">
      <Collapsible
        transitionTime={500}
        easing='ease-in-out'
        open={true}
        triggerClassName='collapsible-comments'
        triggerOpenedClassName='collapsible-comments'
        trigger={<span>&#9660;</span>}>
        {answersComments.map(comments => {
          return <Comment
            className='answers-comments__item'
            key={comments.id}
            {...comments}/>
        })}
      </Collapsible>
    </div>}
  </StyledComment>
});

const normalizeCommentTime = time => {
  const howMuchTimeHasPassed = Date.now() - time;

  const oneOur = 1000 * 60 * 60;
  const days = oneOur * 24;

  let result = {};

  if (howMuchTimeHasPassed > days) {
    const time = Math.ceil(howMuchTimeHasPassed / 1000 / 60 / 60 / 24);
    result = {
      time,
      word: declOfNum(time, ['день', 'дня', 'дней'])
    };
  } else if (howMuchTimeHasPassed > oneOur) {
    const time = Math.ceil(howMuchTimeHasPassed / 1000 / 60 / 60);
    result = {
      time,
      word: declOfNum(time, ['час', 'часа', 'часов'])
    };
  } else {
    const time = Math.ceil(howMuchTimeHasPassed / 1000 / 60);
    result = {
      time,
      word: declOfNum(time, ['минуту', 'минуты', 'минут'])
    };
  }

  return result;
};

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}