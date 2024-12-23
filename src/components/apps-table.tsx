import { FC } from "react";
import { Spinner } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  TableProps,
} from "@nextui-org/table";

import { AppRow } from "@/types";

interface Props extends TableProps {
  data: AppRow[];
  onRowClick: (appRow: AppRow) => void;
  isLoading: boolean;
}

export const AppsTable: FC<Props> = ({
  data = [],
  onRowClick,
  isLoading,
  bottomContent,
}) => {
  const loadingState = isLoading;

  return (
    <Table
      aria-label="Example static collection table"
      bottomContent={bottomContent}
      selectionMode="single"
    >
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Connector</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={<p>No data</p>}
        isLoading={isLoading}
        items={data}
        loadingContent={<Spinner />}
      >
        {(appRow) => (
          <TableRow
            key={appRow.appId}
            className="cursor-pointer"
            onClick={() => onRowClick(appRow)}
          >
            <TableCell>{appRow.appName}</TableCell>
            <TableCell>{appRow.category}</TableCell>
            <TableCell>Reco</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
