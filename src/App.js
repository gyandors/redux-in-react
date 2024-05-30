// import { useSelector } from 'react-redux';

// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';

import Header from './components/E-Comm/Header';
import Products from './components/E-Comm/Products';

export default function App() {
  // const selectAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <Products />
    </>
  );
}
