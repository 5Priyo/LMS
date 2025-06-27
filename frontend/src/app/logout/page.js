"use client"; // Ensures this runs on the client side

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Simulate logging out
    console.log("Logging out...");
    // You would clear session or token here
    router.push("/"); // Redirect to home after logout
  }, [router]);

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h1 className="text-xl font-bold mb-4">Logging Out...</h1>
      <p>Redirecting you to the homepage...</p>
    </div>
  );
}
