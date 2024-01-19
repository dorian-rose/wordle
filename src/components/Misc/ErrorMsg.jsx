import { useDispatch, useSelector } from "react-redux";
import { setValid } from "../../store/slice/validate/validSlice";

export const ErrorMsg = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div className="absolute bg-white w-3/4 border border-gray-500 rounded-xl text-center left-1/2 -translate-x-1/2">
      <button
        className="mt-4 py-0 px-2  bg-red-500 text-white text-lg rounded mt"
        onClick={() => dispatch(setValid("valid"))}
      >
        X
      </button>
      <p className="mt-2 mb-4 text-lg">{message}</p>
    </div>
  );
};
