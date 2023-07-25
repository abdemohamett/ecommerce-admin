import AuthContext from "@/providers/auth-provider";
import getCurrentUser from "../actions/getCurrentUser";

export default  function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div >
        {/* <AuthContext> */}
        {children}
        {/* </AuthContext> */}
      </div>
    );
  };