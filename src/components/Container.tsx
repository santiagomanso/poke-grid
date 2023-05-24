interface containerI {
  children: React.ReactNode;
}

const Container = ({ children }: containerI) => {
  return (
    <main className="h-3/4 w-full max-w-[90rem] rounded bg-white shadow-md">
      {children}
    </main>
  );
};

export default Container;
