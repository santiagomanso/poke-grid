interface containerI {
  children: React.ReactNode;
  flex?: boolean;
  row?: boolean;
}

const Container = ({ children, flex, row }: containerI) => {
  return (
    <main
      className={`h-3/4 w-full max-w-[90rem] rounded bg-white shadow-md shadow-gray-500 transition-colors duration-1000 ease-in-out dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:shadow-none
      ${flex ? "flex" : ""}
      ${row ? "flex-row" : ""}
      `}
    >
      {children}
    </main>
  );
};

export default Container;
