"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "react-grid-layout";
import { LayoutManager } from "./components/LayoutManager";
import { dashboardService } from "./services/dashboardService";
import { Widget } from "./types/dashboard";

const Dashboard: React.FC = () => {
  const [layout, setLayout] = useState<Layout[]>([]);
  const [widgets, setWidgets] = useState<Widget[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [layoutData, widgetData] = await Promise.all([
          dashboardService.fetchLayout(),
          dashboardService.fetchWidgets(),
        ]);

        setLayout(layoutData || []);
        setWidgets(widgetData || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLayoutChange = async (newLayout: Layout[]) => {
    setLayout(newLayout);
    try {
      await dashboardService.saveLayout(newLayout);
    } catch (error) {
      console.error("Error saving layout:", error);
    }
  };

  return (
    <LayoutManager
      layout={layout}
      widgets={widgets}
      onLayoutChange={handleLayoutChange}
    />
  );
};

export default Dashboard;
