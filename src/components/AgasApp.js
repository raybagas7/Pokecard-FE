import React from 'react';
import HeaderParent from './HeaderParent';
import NavHeader from './NavHeader';
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
  refreshAccessToken,
  verifyAccount,
} from '../utils/network-data';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import TradesPage from '../pages/TradesPage';
import '../styles/alert-style.css';
import ValidationContext from '../context/ValidationContext';
import ls from 'localstorage-slim';
import TtlVerifContext from '../context/TtlVerifContext';
import SocialPage from '../pages/SocialPage';
import OffersPage from '../pages/OffersPage';
import SettingPage from '../pages/SettingPage';
import CollectionsPage from '../pages/CollectionsPage';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth.slice';

const AgasApp = () => {
  const dispatch = useDispatch();
  // const [authedUser, setAuthedUser] = React.useState(null);
  const authedUser = useSelector((state) => state.auth.authedUser);
  const [initializing, setInitializing] = React.useState(true);
  const [ttlVerification, setTtlVerification] = React.useState(
    ls.get('waitingVerfication') || false
  );
  const [dailyCheck, setDailyCheck] = React.useState();

  const dailyGiftCheck = (status) => {
    setDailyCheck(status);
  };

  const onLoginSuccess = async ({ accessToken, refreshToken }) => {
    putAccessToken(accessToken);
    putRefreshToken(refreshToken);
    //   ls.set('waitingVerfication', data.user.is_valid);
    const { data } = await getUserLogged();
    setTtlVerification(data.user.is_valid);
    ls.set('waitingVerfication', data.user.is_valid);
    dispatch(authActions.fillAuthedUserData(data));
  };

  const onLogout = () => {
    // setAuthedUser(null);
    dispatch(authActions.emptyAuthedUserData());
    logout(authedUser.user.username);

    putAccessToken('');
    putRefreshToken('');
    ls.remove('waitingVerfication');
  };

  const sendVerification = async (targetEmail) => {
    await verifyAccount(targetEmail).then(({ error, data, message }) => {
      let cond = false;
      message === 'Token maximum age exceeded' ? (cond = true) : (cond = false);
      if (error && cond) {
        refreshAccessToken().then(({ data }) => {
          putAccessToken(data.accessToken);
          verifyAccount(targetEmail).then(({ message }) => {
            // console.log(message);
          });
        });
      } else {
        // console.log(message);
      }
    });
  };

  const toggleTtlVerification = () => {
    setTtlVerification((prevVerify) => {
      const newTtl = prevVerify === true ? false : true;
      ls.set('waitingVerfication', newTtl, { ttl: 86400 });
      return newTtl;
    });
  };

  const validationContextValue = React.useMemo(() => {
    return {
      authedUser,
    };
  }, [authedUser]);

  const ttlVerificationContextValue = React.useMemo(() => {
    return {
      ttlVerification,
      toggleTtlVerification,
    };
  }, [ttlVerification]);

  React.useEffect(() => {
    getUserLogged().then(({ error, data, tokenExpired }) => {
      if (error && tokenExpired) {
        refreshAccessToken().then(({ error, data }) => {
          if (!error) {
            putAccessToken(data.accessToken);
            getUserLogged().then(({ error, data }) => {
              // setAuthedUser(data);
              dispatch(authActions.fillAuthedUserData(data));
              setInitializing(false);
            });
          } else {
            // setAuthedUser(data);
            dispatch(authActions.fillAuthedUserData(data));
            setInitializing(false);
          }
        });
      } else {
        // setAuthedUser(data);
        dispatch(authActions.fillAuthedUserData(data));
        setInitializing(false);
      }
    });
  }, [ttlVerification, dailyCheck, dispatch]);

  if (initializing) {
    return null;
  }

  return authedUser === null ? (
    <div className="container">
      <main>
        <Routes>
          <Route
            path="/*"
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </div>
  ) : (
    <ValidationContext.Provider value={validationContextValue}>
      <TtlVerifContext.Provider value={ttlVerificationContextValue}>
        <div className="content-pokecards">
          <header>
            <HeaderParent
              logout={onLogout}
              sendVerification={sendVerification}
            />
            <NavHeader />
          </header>
          <article>
            <main>
              <Routes>
                <Route path="/*" element={<NotFoundPage />} />
                <Route
                  path="/"
                  element={
                    <HomePage
                      nextDaily={authedUser.user.next_daily}
                      isValid={authedUser.user.is_valid}
                      dailyGiftCheck={dailyGiftCheck}
                    />
                  }
                />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/social" element={<SocialPage />} />
                <Route path="/settings" element={<SettingPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/trades" element={<TradesPage />} />
              </Routes>
            </main>
          </article>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </TtlVerifContext.Provider>
    </ValidationContext.Provider>
  );
};

export default AgasApp;
