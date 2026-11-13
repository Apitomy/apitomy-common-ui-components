
/**
 * A selectable value for a filter type that offers a fixed list of choices.
 */
export type ChipFilterOption = {
    /** The value used as the criteria's filterValue. */
    value: string;
    /** The human-readable label shown in the select and in the filter chip. */
    label: string;
};

export type ChipFilterType = {
    value: any;
    label: string;
    testId: string;
    /** When provided, the filter value is chosen from these options instead of typed as free text. */
    options?: ChipFilterOption[];
};
