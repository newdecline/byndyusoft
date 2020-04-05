import styled from 'styled-components';

export const StyledComment = styled('div')`
  .body {
    display: flex;
    margin-bottom: 20px;
  }
  .avatar {
    position: relative;
    margin-right: 20px;
    flex: 1 0 100px;
    height: 120px;
    overflow: hidden;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .content {
    width: auto;
    flex: 1 1 100%;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
    line-height: 120%;
    color: #1a66aa;
  }
  .data {
    margin: 0 20px;
    font-size: 14px;
    line-height: 120%;
    color: #ccc;
  }
  .rating {
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    align-items: center;
    &__item {
      padding: 2px;
      width: 25px;
      text-align: center;
      border: 1px solid #6a6a6a;
      font-size: 12px;
      line-height: 120%;
      background-color: #b9b9b9;
    }
    .button {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .answer-button {
    padding: 0;
    margin-left: auto;
    border: none;
    background-color: transparent;
    color: #1a66aa;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
  .answers-comments {
    margin-left: 120px;
    .Collapsible {
      &__trigger {
        padding: 10px 10px 10px 0;
        display: inline-block;
        &.is-open.collapsible-comments {
          &::after {
            content: 'Свернуть';
          }
        }
        &.is-closed.collapsible-comments {
          &::after {
            content: 'Развернуть';
          }
        }
      }
    }
  }
  .Collapsible {
    &__trigger {
      &:hover {
        cursor: pointer;
      } 
    }
  }
`;