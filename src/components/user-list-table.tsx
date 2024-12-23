import { FC } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

interface Props {
  users: string[];
}

export const UserListTable: FC<Props> = ({ users = [] }) => {
  return (
    <Table aria-label="User list table">
      <TableHeader>
        <TableColumn>Username</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => {
          return (
            <TableRow key={user + index}>
              <TableCell>{user}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
