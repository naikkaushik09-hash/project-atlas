import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock3, CheckCircle2, AlertCircle } from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Clients",
      value: "24",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Pending Onboarding",
      value: "8",
      icon: Clock3,
      color: "text-orange-500",
    },
    {
      title: "Completed",
      value: "14",
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      title: "Overdue",
      value: "2",
      icon: AlertCircle,
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {stat.value}
                </h2>
              </div>

              <Icon className={`h-9 w-9 ${stat.color}`} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}