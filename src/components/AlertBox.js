export const AlertBox = ({
  alertText,
  setShowAlert,
  positionX,
  positionY,
  border,
}) => {
  setTimeout(() => {
    setShowAlert(false);
  }, 3000);

  return (
    <div
      className={`fixed w-screen sm:w-fit h-fit z-50 flex flex-row ${positionX} ${positionY} text-[#64d97b] font-bold`}
    >
      <div
        className={`m-4 w-full h-fit p-2   bg-orange-50 border-solid border-4 ${border} rounded-lg flex flex-col gap-2`}
      >
        <span>{alertText}</span>
      </div>
    </div>
  );
};
