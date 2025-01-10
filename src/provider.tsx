import { NextUIProvider } from "@nextui-org/system";
import { useHref, useNavigate } from "react-router-dom";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </NextUIProvider>
  );
};

export default Provider;
