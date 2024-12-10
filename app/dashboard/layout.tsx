import { Fragment, PropsWithChildren } from "react";
import { Header } from "./_components/Header";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default DashboardLayout;
