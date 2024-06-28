export function rowText({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="grid items-end grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="w-full lg:col-span-2">
        <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
          {title}
          <span className="text-gray-600">{subtitle}</span>
        </h1>
      </div>
      <p className="text-base font-medium text-gray-500 ">{description}</p>
    </div>
  );
}
