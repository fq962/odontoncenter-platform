// components/Layout.tsx
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Optional: Add a Header component here */}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
