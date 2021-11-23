import styled from '@emotion/styled';

export const UpdatePostContainer = styled.section`
  height: 100vh;
  margin: 0 auto;
  padding: 60px 40px;
`;

export const UpdatePostTitle = styled.h2`
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const UpdatePostInfo = styled.p`
  width: 500px;
  margin-top: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #b5babe;
`;
export const JobTitleInput = styled.input`
  width: 560px;
  height: 48px;
  padding: 14px 16px;
  font-size: 15px;
  line-height: 20px;
  color: #1a051d;
  background: #ffffff;
  border: 1px solid #e5e7fa;
  border-radius: 6px;
  margin-top: 40px;
`;
export const JObDescription = styled.textarea`
  width: 559px;
  height: 120px;
  background: #ffffff;
  border: 1px solid #e5e7fa;
  border-radius: 6px;
  margin-top: 24px;

  ::placeholder {
    @font-face {
      font-family: 'SF Pro Text';
      src: url('../../fonts/SF Pro Text Regular.ttf');
    }
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #d0c9d6;
    padding: 14px 16px;
  }
`;
export const JobSelectContent = styled.div`
  position: relative;
  width: 560px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

export const SelectPost = styled.select`
  width: 274px;
  height: 48px;
  padding: 14px 16px;
  border: 1px solid #e5e7fa;
  border-radius: 6px;
  margin-top: 24px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  @font-face {
    font-family: 'SF Pro Text';
    src: url('../../fonts/SF Pro Text Regular.ttf');
  }
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #3f3356;
  z-index: 9;
`;

export const DropdownLeftIcon = styled.img`
  position: absolute;
  right: 305px;
  top: 45px;
  z-index: 99;
`;

export const DropdownRightIcon = styled.img`
  position: absolute;
  top: 45px;
  right: 20px;
  z-index: 99;
`;

export const SelectPostOption = styled.option``;

export const UpdatePostContent = styled.div`
  overflow: auto;
  height: 150px;
  margin-top: 40px;
`;
export const PostItemTitle = styled.h4``;
export const PostItemBody = styled.p``;

export const ButtonContent = styled.div`
  display: grid;
  justify-content: end;
`;
export const SaveButton = styled.button`
  width: 194px;
  height: 48px;
  margin-top: 40px;
  @font-face {
    font-family: 'SF Pro Text';
    src: url('../../fonts/SF Pro Text Regular.ttf');
  }
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  background: #6979f8;
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
`;
