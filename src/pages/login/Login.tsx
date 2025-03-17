/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importar useRouter
import { supabase } from "@/utils/supabaseClient";
import bcrypt from "bcryptjs";
import {
  showErrorToast,
  showInfoToast,
  ToastAlert,
} from "@/constants/toast-alerts";

// import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Instancia del router

  const handleLogin = async () => {
    // 🔹 Llamamos la función de Supabase para obtener los datos del usuario
    const { data, error } = await supabase.rpc("ft_validar_usuario", {
      p_usuario: usuario,
    });

    if (error || !data) {
      showErrorToast(
        "Error al buscar el usuario: " + (error?.message || "Desconocido")
      );
      return;
    }

    // 🔹 Extraer los valores del JSON
    const { id, passwordHash, message } = data;

    if (id === -1) {
      showInfoToast("Usuario incorrecto", message); // Usuario no encontrado
      return;
    }

    // 🔹 Comparar la contraseña ingresada con el hash almacenado
    const passwordMatch = await bcrypt.compare(password, passwordHash);

    if (!passwordMatch) {
      showErrorToast(
        "La contraseña ingresada es incorrecta. Por favor, inténtelo de nuevo."
      );
      return;
    }

    // 🔹 Usuario autenticado correctamente
    console.log(`Usuario ${usuario} autenticado con ID: ${id}`);
    router.push("/dashboard");
  };

  return (
    <>
      <ToastAlert richColors closeButton position="top-right" />
      <div className="card sm:max-w-sm flex items-center align-middle gap-6 p-8">
        <figure>
          <img
            src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
            alt="Watch"
          />
        </figure>

        <div className="flex flex-col gap-6">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="John Doe"
              className="input input-floating peer"
              id="floatingInput"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <label className="input-floating-label" htmlFor="floatingInput">
              Full name
            </label>
          </div>
          <div className="input-group max-w-sm">
            <div className="relative w-full">
              <input
                id="toggle-password-floating"
                onChange={(e) => setPassword(e.target.value)}
                // type="password"
                type={showPassword ? "text" : "password"}
                className="input input-floating peer"
                placeholder="Enter password"
                // value="Pwd_1242@mA1"
              />
              <label
                className="input-floating-label"
                htmlFor="toggle-password-floating"
              >
                Password
              </label>
            </div>
            <span className="input-group-text">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="block"
                aria-label="password toggle"
              >
                {showPassword ? (
                  <span className="icon-[tabler--eye] text-base-content/80 block  size-5 flex-shrink-0"></span>
                ) : (
                  <span className="icon-[tabler--eye-off] text-base-content/80 block size-5 flex-shrink-0"></span>
                )}
              </button>
            </span>
          </div>

          <button onClick={handleLogin} className="btn w-72">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
