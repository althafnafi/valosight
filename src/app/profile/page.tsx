"use client";

import { useStoreUserEffect } from "@/app/_auth/useStoreUserEffect";

export default function Profile() {
  const { isLoading, isAuthenticated } = useStoreUserEffect();
  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <div>Profile</div>
      ) : (
        <div>Not authenticated</div>
      )}
    </main>
  );
}
