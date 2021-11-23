import styled from '@emotion/styled';

export const JobAsideContent = styled.aside`
  height: 100vh;
  background-color: #6979f8;
`;
export const AsideTitleContent = styled.div`
  padding: 60px 24px 24px 40px;
`;

export const AsideTitle = styled.h2`
  @font-face {
    font-family: 'Montserrat';
    src: url('../../fonts/Montserrat-Regular.ttf');
  }
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
  color: #ffffff;
`;

export const AsideTitleInfo = styled.p`
  @font-face {
    font-family: 'Montserrat';
    src: url('../../fonts/Montserrat-Regular.ttf');
  }

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  margin: 0;
  color: #ffffff;

  opacity: 0.6;
`;

export const AsideArea = styled.div`
  width: 453px;
  height: 107px;
  background: rgba(64, 82, 128, 0.1);
  margin: 0 auto;
`;

export const AsideButtonsContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  margin-top: 60px;
`;
export const UpdateButton = styled.button`
  width: 194px;
  height: 48px;
  border: 0;
  outline: 0;
  background: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  color: #6979f8;
  @font-face {
    font-family: 'SF Pro Text';
    src: url('../../fonts/SF Pro Text Regular.ttf');
  }
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
`;
export const DeleteButton = styled.button`
  width: 194px;
  height: 48px;
  border: 0;
  outline: 0;
  background: #6979f8;
  border: 2px solid #ffffff;
  color: #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  @font-face {
    font-family: 'SF Pro Text';
    src: url('../../fonts/SF Pro Text Regular.ttf');
  }
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
`;
