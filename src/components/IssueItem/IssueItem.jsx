import React from 'react';
import { useNavigate } from 'react-router';
import formDate from '../../utils/formDate';
import S from './styles';

const IssueItem = ({ id, number, title, user, created_at, comments }) => {
  const navigate = useNavigate();
  const { login } = user;
  const date = formDate(created_at);
  const handleClick = () => {
    navigate(`/${id})`);
  };
  return (
    <S.List onClick={handleClick}>
      <S.LeftBox>
        <header>
          <span>{`#${number}`}</span>
          <h1>{title}</h1>
        </header>
        <div>
          <span>{`작성자: ${login}`}</span>
          <span>{date}</span>
        </div>
      </S.LeftBox>
      <S.RightBox>
        코멘트:
        {comments}
      </S.RightBox>
    </S.List>
  );
};

export default IssueItem;
