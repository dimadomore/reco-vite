import { FC } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@nextui-org/drawer";

import { UserListTable } from "./user-list-table";

import { useGetAppOverview, useGetAppUsers } from "@/api";

interface Props {
  appId: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onClose: () => void;
}

export const ApplicationOverviewDrawer: FC<Props> = ({
  appId,
  isOpen,
  onOpenChange,
  onClose,
}) => {
  const { data: appData, error, isLoading } = useGetAppOverview(appId);

  console.log("appData:", appData);
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useGetAppUsers(appId);

  const appOverviewData = appData?.appOverview;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-gray-100">
        {() => (
          <>
            <DrawerHeader className="flex flex-col gap-1">
              App overview
            </DrawerHeader>

            <DrawerBody>
              {isLoading && <p>Loading app overview...</p>}
              {error && <p>Error loading app overview</p>}
              {!isLoading && !error && (
                <div>
                  <h1 className="mb-4">{appOverviewData.appName}</h1>
                  <div className="flex flex-col gap-4 bg-blue-50 p-4 rounded-lg border-1 border-blue-600">
                    <p>App name: {appOverviewData.appName}</p>
                    <p>Category: {appOverviewData.category}</p>
                    {!usersLoading && !usersError && (
                      <p>Users: {usersData.appUsers.length}</p>
                    )}
                    <p>Connector: Reco</p>
                  </div>
                </div>
              )}
              {usersLoading && <p>Loading users...</p>}
              {usersError && <p>Error loading users</p>}
              {!usersLoading && !usersError && (
                <UserListTable users={usersData.appUsers} />
              )}
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};
