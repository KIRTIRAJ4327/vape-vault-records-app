
import React from "react";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Temporarily bypass authentication check
  return <>{children}</>;
  
  // Original authentication code is kept but commented out for future use
  /*
  const { user, loading } = useAuth();

  if (loading) {
    // Show a loading indicator while checking authentication
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vape-purple"></div>
      </div>
    );
  }

  if (!user) {
    // Redirect to auth page if not authenticated
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
  */
};

export default ProtectedRoute;
