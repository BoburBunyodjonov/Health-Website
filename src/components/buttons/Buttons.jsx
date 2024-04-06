const ButtonTertiary = ({ title }) => {
  return (
    <button className="text-sm text-[#202020] border border-[#D5D1E1] hover:border-[#07745E] focus:border-2 focus:border-[#07745E] focus:bg-[#E1EFE6] rounded-[50px] px-[20px] py-[11px]">
      {title}
    </button>
  );
};

const ButtonSecondary = ({ title }) => {
  return (
    <button className="text-sm font-semibold text-[#088269] border border-[#D5D1E1] hover:border-[#07745E] focus:text-[#066753] focus:border-[#066753] focus:bg-[#E1EFE6] rounded-[50px] px-[20px] py-[11px]">
      {title}
    </button>
  );
};


const ButtonPrimary = ({ title }) => {
    return (
      <button className="text-sm text-[#F8F7F3] focus:border-[#088269] border-2 duration-200 bg-[#088269] hover:bg-[#07745E] focus:border-2 border-[#088269] focus:bg-[#066753] focus:text-[#F8F7F3] rounded-[50px] px-[20px] py-[11px]">
        {title}
      </button>
    );
};

const ButtonQuaternary = ({ title, width, onChandleAddToCartlick }) => {
  return (
    <button onClick={onChandleAddToCartlick} className={`${width} border border-[#D5D1E1] duration-200 bg-inherit text-sm text-[#088269] font-semibold hover:bg-[#07745E] hover:text-[#F8F7F3] focus:border-[#088269]  focus:border-2 focus:bg-[#066753] focus:text-[#F8F7F3] rounded-[50px] px-[20px] py-[11px]`}>
      {title}
    </button>
  );
};


export { ButtonTertiary, ButtonPrimary, ButtonSecondary, ButtonQuaternary };
