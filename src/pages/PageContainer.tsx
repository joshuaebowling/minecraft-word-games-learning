import React, { PropsWithChildren, ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
}: PropsWithChildren<PageContainerProps>) => {
  return (
    <>
      <div style={{ paddingBottom: "2rem" }}>{children}</div>
    </>
  );
};

export default PageContainer;
