const MagicButton = ({ title, icon, position, handleClick, otherClasses }:) => {
  return (
    // Button code
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:bg-[linear-gradient(110deg,#000203,45%,#1e3631,55%,#000203)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2">
      Mes créations
    </button>
  );
};

export default MagicButton;
