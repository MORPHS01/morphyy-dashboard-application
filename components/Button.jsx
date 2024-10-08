"use client"
import { useStateContext } from '@contexts/ContextProvider';

function Button({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }){
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ color, borderRadius }}
      className={` text-${size} py-3 px-6  w-${width} ${bgColor} hover:bg-darkCyan`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;