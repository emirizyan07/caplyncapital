
export function Button({ children, className, ...props }) {
  return (
    <button className={`bg-[#0e1a2b] text-white rounded-xl px-4 py-2 hover:bg-[#1c2c44] transition ${className}`} {...props}>
      {children}
    </button>
  );
}
