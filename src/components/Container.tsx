interface containerI {
  children: React.ReactNode;
  flex?: boolean;
  row?: boolean;
  coins?: boolean;
}

const Container = ({ children, flex, row, coins }: containerI) => {
  return (
    <main
      className={`h-3/4 w-full max-w-[90rem] rounded bg-gradient-to-br from-white to-white shadow-md shadow-gray-700 transition-colors duration-1000 ease-in-out dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:shadow-none
      ${flex ? "flex" : ""}
      ${row ? "flex-row" : ""}
      ${coins ? "relative" : ""}
      `}
    >
      {coins && (
        <span className="absolute -right-1 -top-3 rounded-full border-2 border-slate-400 bg-gradient-to-br from-yellow-200 to-amber-600 px-3 py-1 font-medium text-gray-600 dark:text-gray-700">
          Coins: 0
        </span>
      )}
      {children}
    </main>
  );
};

export default Container;
