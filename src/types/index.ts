import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface GetAppsRequest {
  pageNumber: number;
  pageSize: number;
}

export interface GetAppsResponse {
  appRows: AppRow[];
  totalCount: number;
}

export interface AppRow {
  appId: string;
  appName: string;
  category: string;
  appSources: string[];
}
