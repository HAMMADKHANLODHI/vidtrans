// app/SuppressHydrationWarning.js
export function SuppressHydrationWarning({ children }) {
  return <div suppressHydrationWarning>{children}</div>;
}