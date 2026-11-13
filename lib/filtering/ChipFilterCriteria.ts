import { ChipFilterType } from "./ChipFilterType";

export type ChipFilterCriteria = {
    filterBy: ChipFilterType;
    filterValue: string;
    /** Optional display label for the value; shown in the filter chip instead of filterValue when set. */
    filterLabel?: string;
};
