interface StatsCardProps {
  title: string;
  value: string;
  unit?: string;
}

export function StatsCard({ title, value, unit }: StatsCardProps) {
  return (
    <div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-3xl font-bold">
        {value}{unit && <span className="text-xl ml-1">{unit}</span>}
      </p>
    </div>
  );
}