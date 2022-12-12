import React from 'react';
import HeaderParent from './HeaderParent';
import NavHeader from './NavHeader';
import { getList } from '../utils/navlist';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import {
  getUserLogged,
  logout,
  putAccessToken,
  putRefreshToken,
} from '../utils/network-data';

const AgasApp = () => {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const [list, setList] = React.useState([]);

  const onLoginSuccess = async ({ accessToken, refreshToken }) => {
    putAccessToken(accessToken);
    putRefreshToken(refreshToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    logout();

    putAccessToken('');
    putRefreshToken('');
  };

  React.useEffect(() => {
    setList(getList());
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      console.log(data);
      setInitializing(false);
    });
  }, []);

  if (initializing) {
    return null;
  }

  return authedUser === null ? (
    <div>
      <main>
        <Routes>
          <Route
            path="/*"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          ></Route>
        </Routes>
      </main>
    </div>
  ) : (
    <div>
      <header>
        <HeaderParent logout={onLogout} />
        <NavHeader lists={list} />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
// class AgasApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: getLlist(),
//       card: getCard(),
//       elements: getElement(),
//       socmed_black: getSocmedBlack(),
//       socmed_white: getSocmedWhite(),
//     };
//   }

//   render() {
//     return (
//       <div>
//         <HeaderParent />
//         <NavHeader lists={this.state.list} />
//         <JumboTron
//           blackmed={this.state.socmed_black}
//           whitemed={this.state.socmed_white}
//         />
//         <MainContent cards={this.state.card} elements={this.state.elements} />
//         <CollectedCardsContainer />
//         <Footer />
//       </div>
//     );
//   }
// }

export default AgasApp;
