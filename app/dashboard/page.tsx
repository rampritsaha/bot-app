"use client";

import { StatsCard } from "@/components/dashboard/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="h-full bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Welcome back, {session?.user?.name || "User"}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <StatsCard title="Total Views" value="3,300" />
                <StatsCard title="Average Time" value="2.5" unit="min" />
                <StatsCard title="Bounce Rate" value="45" unit="%" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
