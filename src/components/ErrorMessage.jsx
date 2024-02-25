const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center gap-2 text-red dark:text-light-grey text-lg font-normal mt-4 md:mt-6">
      <img
        src="/assets/icon-error.svg"
        alt="Error Icon"
        className="w-8 h-8 md:w-12 md:h-12"
      />
      <p className="text-[1.12rem] md:text-lg">{message}</p>
    </div>
  );
};

export default ErrorMessage;
