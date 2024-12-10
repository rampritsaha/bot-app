import React from "react";
import { Widget as WidgetType } from "../types/dashboard";

interface WidgetProps {
  widget: WidgetType;
}

export const Widget: React.FC<WidgetProps> = ({ widget }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full w-full">
      <h3 className="text-lg font-semibold mb-2">{widget.title}</h3>
      <div className="widget-content">{widget.content}</div>
    </div>
  );
};
