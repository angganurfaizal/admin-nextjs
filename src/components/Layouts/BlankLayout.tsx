import { PropsWithChildren } from "react";
import App from "../../App";

const BlankLayout = ({ children }: PropsWithChildren) => {
  return (
    <App>
      <div className="dark:text-white-dark min-h-screen text-black">
        {children}{" "}
      </div>
    </App>
  );
};

export default BlankLayout;
