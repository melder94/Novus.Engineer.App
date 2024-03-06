import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { useAuth0 } from "@auth0/auth0-react";
import { useSearchParams } from "react-router-dom";

export const AcceptUserInvitePage: React.FC = () => {
 const { loginWithRedirect } = useAuth0();
 let [searchParams] = useSearchParams();

  useEffect(() => {
    const invitationId = searchParams.get("invitation") as string;
    const organizationId = searchParams.get("organization") as string;
    const acceptInvite = async () => {
        await loginWithRedirect({
            authorizationParams: {
              invitation: invitationId,
              organization: organizationId,
            },
        });
    };
    acceptInvite();
  }, []);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1>Invitation Accepted</h1>
      </div>
    </PageLayout>
  );
};
