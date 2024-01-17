export const Keys = (props) => {
  const { onClick, letter, bigKey } = props;

  return (
    <button
      onClick={(ev) => onClick(ev)}
      className={`${
        bigKey ? "w-20" : "w-16 capitalize"
      } h-14 m-1 rounded-md grid place-items-center text-base bg-gray-300 text-black cursor-pointer font-bold`}
    >
      {letter}
    </button>
  );
};
