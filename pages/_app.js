import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import AppSider from '../components/AppSider';
import { Layout } from 'antd';

import AppHeader from '../components/AppHeader';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import BtnLogin from '../components/BtnLogin';

import UserInfo from '../components/UserInfo';
import wrapper from '../store/configureStore';
import { useSelector } from 'react-redux';

const LeftSider = styled.div`
  background: #fff;
  /* height: calc(100vh - 64px); */
`;

const AppContainer = styled(Layout)`
  min-height: 100vh;
`;

const ContentContainer = styled(Layout)`
  /* height: calc(100vh - 60px); */
`;

const ComponentConatiner = styled.div`
  padding: 24px;
  overflow: hidden;
`;

function App({ Component }) {
  const isLoggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <AppContainer>
          <AppHeader />
          <ContentContainer>
            <Row>
              <Col xs={24} sm={7} md={5} lg={4}>
                <LeftSider>
                  {isLoggedIn ? <UserInfo /> : <BtnLogin />}
                  <AppSider />
                </LeftSider>
              </Col>
              <Col xs={24} sm={17} md={19} lg={20}>
                <ComponentConatiner>
                  <Component />
                </ComponentConatiner>
              </Col>
            </Row>
          </ContentContainer>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
