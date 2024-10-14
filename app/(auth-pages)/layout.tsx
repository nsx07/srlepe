export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full sm:max-w-7xl h-96 mt-20">{children}</div>;
}
