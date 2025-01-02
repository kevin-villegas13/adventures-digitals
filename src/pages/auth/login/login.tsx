import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

// Definición de los campos del formulario
const fields = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "tucorreo@ejemplo.com",
    required: true,
  },
  {
    id: "password",
    label: "Contraseña",
    type: "password",
    required: true,
  },
];

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Efecto para controlar la animación al refrescar la página
  useEffect(() => {
    setMounted(true);
  }, []);

  // Manejo del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Lógica de autenticación
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <motion.div
        className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }} // Animación de entrada desde abajo
        animate={{ opacity: 1, y: 0 }} // Llega a la posición normal
        transition={{ duration: 0.6 }} // Duración de la animación
      >
        {mounted && (
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-semibold mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-center text-sm text-gray-600 mb-6">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campos del formulario */}
              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        id={field.id}
                        type={
                          showPassword && field.id === "password"
                            ? "text"
                            : field.type
                        }
                        placeholder={field.placeholder}
                        required={field.required}
                        disabled={isLoading}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      {/* Botón para mostrar/ocultar contraseña */}
                      {field.id === "password" && (
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            {showPassword
                              ? "Ocultar contraseña"
                              : "Mostrar contraseña"}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {/* Enlace para recuperar contraseña */}
                <div className="text-center">
                  <NavLink
                    to="/forgot-password"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </NavLink>
                </div>
              </div>

              {/* Botón de submit y opciones de inicio de sesión */}
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </button>

                {/* Separador y opciones de redes sociales */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-gray-50 px-2 text-gray-500">
                      O continúa con
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    className="w-full max-w-xs py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center"
                    disabled={isLoading}
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                      alt="Google"
                      className="h-5 w-5 mr-2"
                    />
                    Google
                  </button>
                </div>

                {/* Enlace para registro */}
                <p className="text-center text-sm text-gray-600 mt-4">
                  ¿No tienes una cuenta?{" "}
                  <NavLink
                    to="/register"
                    className="text-indigo-600 hover:underline"
                  >
                    Regístrate
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Login;
