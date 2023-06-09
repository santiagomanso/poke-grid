import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GridHud = () => {
  return (
    <>
      <img
        src="https://i.ibb.co/tP4V6DT/gridPlay.png"
        alt=""
        className="h-full"
      />
      <span className="absolute left-[10%] top-[60%] rounded-lg border-2 border-slate-900 bg-slate-300 px-3 py-2 text-2xl text-gray-600 dark:border-slate-200 dark:bg-slate-800 dark:text-white">
        0kw
      </span>
      <span className="absolute left-[30%] top-[75%] rounded-lg border-2 border-slate-900 bg-slate-300 px-3 py-2 text-2xl text-gray-600 dark:border-slate-200 dark:bg-slate-800 dark:text-white">
        10kw
      </span>
      <span className="absolute left-[70%] top-[75%] rounded-lg border-2 border-slate-900 bg-slate-300 px-3 py-2 text-2xl text-gray-600 dark:border-slate-200 dark:bg-slate-800 dark:text-white">
        10kw
      </span>
      <span className="absolute left-[73%] top-[25%] rounded-lg border-2 border-slate-900 bg-slate-300 px-3 py-2 text-2xl text-gray-600 dark:border-slate-200 dark:bg-slate-800 dark:text-white">
        0kw
      </span>

      {/* ACTIVE POKEMON */}
      <div className="absolute left-[12%] top-[8%] flex flex-col items-center">
        <div className="min-h-[130px] w-full">
          <div className="flex items-center justify-center rounded-md ">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Cute-Pikachu-Transparent.png"
              alt=""
              className="w-full max-w-[130px]"
            />
          </div>
        </div>
        <button className="flex items-center gap-1 rounded-md border-2 border-violet-500 bg-gradient-to-br from-indigo-500 to-rose-300 px-6 py-2 transition-all duration-150 ease-in-out active:translate-y-2 dark:border-yellow-900 dark:from-yellow-400 dark:to-amber-700">
          <span className="font-medium uppercase tracking-wider text-white">
            impact trueno
          </span>
          <FontAwesomeIcon
            icon={faBolt}
            className="text-xl text-yellow-600 dark:text-white"
          />
        </button>
      </div>
    </>
  );
};
export default GridHud;
