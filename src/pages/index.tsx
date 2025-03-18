import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // 🔹 Redirige automáticamente al login
  }, [router]);

  return null; // 🔹 No renderiza nada, solo redirige
}
