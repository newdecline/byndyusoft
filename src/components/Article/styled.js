import styled from 'styled-components';

export const StyledArticle = styled('div')`
  margin: 20px;
  .article {
    &-title {
      margin-top: 0;
      max-height: 58px;
      font-size: 24px;
      line-height: 120%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-timestamp {
      margin: 10px 0;
    }
    &-body {
      white-space: pre-wrap;
    }
  }
`;