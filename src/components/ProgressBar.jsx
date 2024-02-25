const ProgressBar = ({ progress }) => {
  return (
    <div className="flex w-full h-4 bg-pure-white rounded-full">
      <div
        className="bg-purple h-2 m-1 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
