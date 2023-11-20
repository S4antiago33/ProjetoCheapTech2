import GlobalStyles from "@/styles/global";
import StyledComponentsRegistry from "../regystry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Providers } from "../providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          hideProgressBar
        />
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyles />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
