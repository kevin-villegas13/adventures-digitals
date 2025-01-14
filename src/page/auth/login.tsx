import { Button, Checkbox, Form, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { IconEyeFilled, IconEyeClosed } from "@tabler/icons-react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-lg bg-white px-6 py-8 shadow-md sm:max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Iniciar Sesión
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </h1>
        <Form
          className="flex flex-col gap-4"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            label="Correo electrónico"
            labelPlacement="outside"
            name="email"
            placeholder="Ingresa tu correo electrónico"
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
            placeholder="Ingresa tu contraseña"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox defaultSelected name="remember" size="sm">
              Recuérdame
            </Checkbox>
            <Link className="text-blue-500" href="#" size="sm">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Button className="w-full" color="primary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
        <p className="text-center text-sm text-gray-600">
          ¿No tienes una cuenta?
          <Link href="/register" size="sm" className="text-blue-500">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
