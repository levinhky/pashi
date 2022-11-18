import React from "react";

const Button = ({
  type = "button",
  onClick = () => {},
  kind = "primary",
  children,
  ...props
}) => {
  return (
    <button
      className="text-white font-medium transition-all hover:brightness-125 bg-[#338dbc] text-center rounded-lg px-3 py-6"
      type="submit"
      onClick={onClick}
    >
      {isSubmitting ? (
        <div className="w-8 h-8 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
      ) : (
        "Tiếp tục đến phương thức thanh toán"
      )}
    </button>
  );
};

export default Button;
