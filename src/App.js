import { useSelector } from 'react-redux';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

export default function App() {
  const selectAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {selectAuth ? <Welcome /> : <LoginForm />}
      <Counter />
    </>
  );
}
