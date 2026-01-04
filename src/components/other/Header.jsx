const Header = () => {
  return (
    <div className="w-full flex items-end justify-between text-white">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Sajal👋🏻</span>
      </h1>
      <button className="bg-red-600 px-5 py-2 hover:bg-red-500 rounded-lg text-xl font-medium active:scale-98">
        Log Out
      </button>
    </div>
  );
};

export default Header;
