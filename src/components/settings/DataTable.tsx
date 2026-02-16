"use client";

import { ReactNode } from "react";
import { Checkbox } from "@/components/ui/Checkbox";

export type DataTableColumn<T> = {
  key: string;
  header: ReactNode;
  /** CSS width value, e.g. "259px" or "1fr" */
  width?: string;
  renderCell: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  /** CSS grid template columns, e.g. "40px 259px 217px 1fr" */
  columnTemplate: string;
  columns: DataTableColumn<T>[];
  data: T[];
  getRowId: (row: T) => string;
  /** When true, adds a leading checkbox column for row selection */
  selectable?: boolean;
  selectedIds?: Set<string>;
  onSelectionChange?: (selectedIds: Set<string>) => void;
};

export function DataTable<T>({
  columnTemplate,
  columns,
  data,
  getRowId,
  selectable = false,
  selectedIds = new Set(),
  onSelectionChange,
}: DataTableProps<T>) {
  const allSelected =
    data.length > 0 && selectedIds.size === data.length;

  function toggleRowSelection(rowId: string) {
    if (!onSelectionChange) return;
    const next = new Set(selectedIds);
    if (next.has(rowId)) {
      next.delete(rowId);
    } else {
      next.add(rowId);
    }
    onSelectionChange(next);
  }

  function toggleAllRows() {
    if (!onSelectionChange) return;
    if (selectedIds.size === data.length) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(data.map(getRowId)));
    }
  }

  const gridCols = selectable
    ? `48px ${columnTemplate}`
    : columnTemplate;

  const headerCellBorder = "border-b border-[#cedaed] border-r border-[#e8ecf1]";
  const lastHeaderCellBorder = "border-b border-[#cedaed]";
  const bodyCellBorder = "border-b border-r border-[#e8ecf1]";
  const lastBodyCellBorder = "border-b border-[#e8ecf1]";

  return (
    <div
      className="border border-[#e8ecf1]"
      style={{ display: "grid", gridTemplateColumns: gridCols }}
    >
      {selectable && (
        <div className={`bg-[#f7f9fc] size-[40px] flex items-center justify-center ${headerCellBorder}`}>
          <Checkbox
            checked={allSelected}
            onToggle={toggleAllRows}
            ariaLabel="Select all rows"
          />
        </div>
      )}
      {columns.map((col, idx) => (
        <div
          key={col.key}
          className={`bg-[#f7f9fc] h-[40px] flex items-center px-[10px] ${idx === columns.length - 1 ? lastHeaderCellBorder : headerCellBorder}`}
          style={col.width ? { minWidth: col.width } : undefined}
        >
          {col.header}
        </div>
      ))}
      {data.map((row) => {
        const rowId = getRowId(row);
        const isSelected = selectedIds.has(rowId);
        const rowBg = isSelected
          ? "bg-[#dbeeff]"
          : "bg-white group-hover:bg-[#f7f9fc]";

        return (
          <div key={rowId} className="contents group">
            {selectable && (
              <div
                className={`size-[40px] flex items-center justify-center ${bodyCellBorder} transition-colors ${rowBg}`}
              >
                <Checkbox
                  checked={isSelected}
                  onToggle={() => toggleRowSelection(rowId)}
                  ariaLabel={`Select row for ${rowId}`}
                />
              </div>
            )}
            {columns.map((col, idx) => (
              <div
                key={col.key}
                className={`h-[40px] flex items-center px-[10px] ${idx === columns.length - 1 ? lastBodyCellBorder : bodyCellBorder} transition-colors ${rowBg}`}
              >
                {col.renderCell(row)}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
