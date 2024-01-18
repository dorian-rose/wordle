import { useDispatch, useSelector } from "react-redux";
import { setValid } from "../../store/slice/validate/validSlice";

export const ErrorMsg = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-white p-4 shadow-lg rounded-lg text-red-500  absolute -translate-x-1/2 left-1/2">
      <button
        className="py-0 px-2  bg-red-500 text-white text-lg"
        onClick={() => dispatch(setValid("valid"))}
      >
        X
      </button>
      <p className="my-4 text-lg">{message}</p>
    </div>
  );
};
