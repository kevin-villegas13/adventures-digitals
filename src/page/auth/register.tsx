import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { IconEyeFilled, IconEyeClosed } from "@tabler/icons-react";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg bg-white px-6 py-8 shadow-md sm:max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Crear Cuenta
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            isRequired
            label="Nombre de usuario"
            labelPlacement="outside"
            name="username"
            placeholder="Escribe tu nombre de usuario"
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            label="Correo electrónico"
            labelPlacement="outside"
            name="email"
            placeholder="Escribe tu correo electrónico"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button
                type="button"
                onClick={toggleVisibility}
                aria-label="Mostrar u ocultar contraseña"
              >
                {isVisible ? (
                  <IconEyeClosed className="pointer-events-none text-2xl text-gray-500" />
                ) : (
                  <IconEyeFilled className="pointer-events-none text-2xl text-gray-500" />
                )}
              </button>
            }
            label="Contraseña"
            labelPlacement="outside"
            name="password"
            placeholder="Escribe tu contraseña"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button
                type="button"
                onClick={toggleConfirmVisibility}
                aria-label="Mostrar u ocultar confirmación de contraseña"
              >
                {isConfirmVisible ? (
                  <IconEyeClosed className="pointer-events-none text-2xl text-gray-500" />
                ) : (
                  <IconEyeFilled className="pointer-events-none text-2xl text-gray-500" />
                )}
              </button>
            }
            label="Confirmar contraseña"
            labelPlacement="outside"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            type={isConfirmVisible ? "text" : "password"}
            variant="bordered"
          />

          <Button color="primary" type="submit" className="w-full">
            Registrarse
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?
          <Link href="/login" size="sm" className="text-blue-500">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
