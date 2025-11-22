import { Card } from "@/components/ui/card";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Matchday Review</h1>
      <Card className="w-full max-w-md p-6 rounded-lg">{children}</Card>
    </div>
  );
}
