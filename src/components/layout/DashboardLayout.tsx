import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  // Función para cerrar sesión
  const handleLogout = async () => {
    router.push("/"); // Redirigir al Login después de cerrar sesión
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-text max-sm:btn-square sm:hidden"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="default-sidebar"
        data-overlay="#default-sidebar"
      >
        <span className="icon-[tabler--menu-2] size-5"></span>
      </button>

      <aside
        id="default-sidebar"
        className="overlay sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden max-w-64 sm:absolute sm:z-0 sm:flex sm:translate-x-0"
        role="dialog"
        tabIndex={-1}
      >
        <div className="drawer-body px-2 pt-4 flex flex-col h-full">
          <ul className="menu p-0 flex-grow">
            <li>
              <Link
                href="/dashboard/pacientes"
                className={
                  router.pathname === "/dashboard/pacientes" ? "font-bold" : ""
                }
              >
                <span className="icon-[tabler--users] size-5"></span>
                Pacientes
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/egresos"
                className={
                  router.pathname === "/dashboard/egresos" ? "font-bold" : ""
                }
              >
                <span className="icon-[tabler--businessplan] size-5"></span>
                Egresos
              </Link>
            </li>
          </ul>
          <ul className="menu p-0 mt-auto">
            <li>
              <button onClick={handleLogout} className="btn btn-danger w-full">
                <span className="icon-[tabler--logout-2] size-5"></span>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {/* Contenido dinámico */}
      <main className="ml-64 p-6 w-full">{children}</main>
    </div>
  );
}
