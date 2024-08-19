"use client";

// import { useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

export function Badge() {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="App">
      {isAuthenticated ? "Logged in" : "Logged out or still loading"}
    </div>
  );
}
