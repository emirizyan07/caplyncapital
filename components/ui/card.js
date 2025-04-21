
export function Card({ children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
