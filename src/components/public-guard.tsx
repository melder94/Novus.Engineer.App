import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { PageLoader } from "./page-loader";

interface PublicGuardProps {
  component: ComponentType;
}

export const PublicGuard: React.FC<PublicGuardProps> = ({
  component,
}) => {
  const Component = component;
  return <Component />;
};
