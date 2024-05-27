import { useDispatch } from 'react-redux';
import { authAction } from '../store';

export default function LoginForm() {
  const dispatch = useDispatch();

  function handleFormSubmit(event) {
    event.preventDefault();

    dispatch(authAction.isLogin());
  }

  return (
    <div className="w-96 m-auto my-3 bg-white rounded p-3">
      <h1 className="mb-5 text-center text-2xl font-semibold">Login</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-5">
          <label className="block font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-slate-400 p-1 rounded w-full"
            type="email"
            id="email"
          />
        </div>
        <div className="mb-5">
          <label className="block font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border border-slate-400 p-1 rounded w-full"
            type="password"
            id="password"
          />
        </div>

        <div>
          <button
            className="border rounded bg-blue-600 px-2 py-1 text-semibold text-white hover:bg-blue-500"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
