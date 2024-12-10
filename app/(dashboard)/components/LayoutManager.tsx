import React from "react";
import GridLayout, { Layout } from "react-grid-layout";
import { Widget as WidgetType } from "../types/dashboard";
import { Widget } from "./Widget";

interface LayoutManagerProps {
  layout: Layout[];
  widgets: WidgetType[];
  onLayoutChange: (layout: Layout[]) => void;
}

export const LayoutManager: React.FC<LayoutManagerProps> = ({
  layout,
  widgets,
  onLayoutChange,
}) => {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={onLayoutChange}
    >
      {widgets.map((widget) => (
        <div key={widget.id}>
          <Widget widget={widget} />
        </div>
      ))}
    </GridLayout>
  );
};
