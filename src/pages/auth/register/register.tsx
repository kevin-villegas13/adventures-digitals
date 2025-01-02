import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

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
  {
    id: "confirmPassword",
    label: "Confirmar Contraseña",
    type: "password",
    required: true,
  },
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {mounted && (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-semibold">Crear Cuenta</h2>
          <p className="text-center text-sm text-gray-600">
            Ingresa tus datos para crear una nueva cuenta
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    id={field.id}
                    type={
                      (field.id === "password" && showPassword) ||
                      (field.id === "confirmPassword" && showConfirmPassword)
                        ? "text"
                        : field.type
                    }
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled={isLoading}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {(field.id === "password" ||
                    field.id === "confirmPassword") && (
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() =>
                        field.id === "password"
                          ? setShowPassword(!showPassword)
                          : setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {field.id === "password" && showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : field.id === "confirmPassword" &&
                        showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : field.id === "password" ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {field.id === "password" && showPassword
                          ? "Ocultar contraseña"
                          : field.id === "confirmPassword" &&
                            showConfirmPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gray-50 px-2 text-gray-500">
                    O regístrate con
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

              <p className="text-center text-sm text-gray-600">
                ¿Ya tienes una cuenta?{" "}
                <NavLink
                  to="/login"
                  className="text-indigo-600 hover:underline"
                >
                  Iniciar sesión
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Register;
