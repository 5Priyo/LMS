'use client';

import { useEffect, useState } from "react";
import { useRouter,usePathname } from "next/navigation";
import Loading from "./loading";



export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const timer = setTimeout(() => {
        setLoading(false);
        router.push("/home");
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false); // no loading if not on root
    }
  }, [pathname, router]);

  if (loading) return <Loading />;

  return <>{children}</>;
}
