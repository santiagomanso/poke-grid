import Navbar from "./Navbar";

interface lauoutI {
  children: React.ReactNode;
}

const Layout = ({ children }: lauoutI) => {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-neutral-800 to-zinc-700">
      <Navbar />
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;
