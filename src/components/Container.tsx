interface containerI {
  children: React.ReactNode;
}

const Container = ({ children }: containerI) => {
  return (
    <main className="h-3/4 w-full max-w-[90rem] rounded bg-white shadow-md shadow-gray-500 transition-colors duration-1000 ease-in-out dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 dark:shadow-none">
      {children}
    </main>
  );
};

export default Container;
