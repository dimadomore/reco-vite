import { useState, useMemo } from "react";
import { useDisclosure } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
import { useGetApps } from "@/api";
import { AppsTable } from "@/components/apps-table";
import { ApplicationOverviewDrawer } from "@/components/application-overview";
import { AppRow } from "@/types";

enum PageSize {
  _25 = 25,
  _50 = 50,
}

export default function AppsPage() {
  const [pageNumber, setPageNumber] = useState(1);

  console.log("pageNumber:", pageNumber);
  const [pageSize, setPageSize] = useState<PageSize>(PageSize._25);
  const [openedAppOverviewId, setOpenedAppOverviewId] = useState<string>();
  const { data = [], isLoading } = useGetApps({ pageNumber, pageSize });

  console.log("data:", data);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const pageTitle = "App Inventory";

  const pages = useMemo(() => {
    return data?.totalCount ? Math.ceil(data.totalCount / pageSize) : 0;
  }, [data?.totalCount, pageSize]);

  const handleAppRowOpen = (appRow: AppRow) => {
    setOpenedAppOverviewId(appRow.appId);
    onOpenChange();
  };

  //   const onRowsPerPageChange = useCallback((option: PageSize) => {
  //     setPageSize(option);
  //     setPageNumber(1);
  //   }, []);

  return (
    <DefaultLayout>
      <section>
        <h1 className="text-3xl mb-8">{pageTitle}</h1>
        <div className="mb-4">
          <AppsTable
            bottomContent={
              pages > 0 ? (
                <Pagination
                  isCompact
                  initialPage={1}
                  page={pageNumber}
                  total={pages}
                  onChange={(page) => setPageNumber(page)}
                />
              ) : null
            }
            data={data.appRows}
            isLoading={isLoading}
            onRowClick={handleAppRowOpen}
          />
        </div>
        {openedAppOverviewId && (
          <ApplicationOverviewDrawer
            appId={openedAppOverviewId}
            isOpen={isOpen}
            onClose={() => setOpenedAppOverviewId(undefined)}
            onOpenChange={onOpenChange}
          />
        )}
      </section>
    </DefaultLayout>
  );
}
