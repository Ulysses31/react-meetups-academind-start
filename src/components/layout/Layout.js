import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto my-auto">
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}
