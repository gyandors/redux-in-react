import { useSelector, useDispatch } from 'react-redux';

import { isLogin } from '../store/authSlice';

export default function Header() {
  const selectAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header className="bg-white h-[56px] flex justify-between items-center p-2 shadow-lg shadow-gray-400">
      <span className="text-2xl font-semibold">Redux Auth</span>
      <nav className="flex gap-4 items-center">
        {selectAuth && (
          <>
            <a className="hover:text-blue-600" href="/">
              Home
            </a>
            <a className="hover:text-blue-600" href="/">
              About
            </a>
            <a className="hover:text-blue-600" href="/">
              Contact
            </a>
            <button
              className="border rounded bg-blue-600 px-2 py-1 text-semibold m-1 text-white hover:bg-blue-500"
              onClick={() => {
                dispatch(isLogin());
              }}
            >
              Logout
            </button>
          </>
        )}
        {/* {!selectAuth && (
          <button className="border rounded bg-blue-600 px-2 py-1 text-semibold m-1 text-white hover:bg-blue-500">
            Login
          </button>
        )} */}
      </nav>
    </header>
  );
}
