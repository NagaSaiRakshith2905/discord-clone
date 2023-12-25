import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 p-24">
      {children}
    </div>
  );
};

export default AuthLayout;
