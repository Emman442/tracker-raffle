import AdminPanel from "@/components/AdminPanel";

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#00FF9C]">
          Admin Panel
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Manage the Lucky Seeker program. These actions are restricted to the
          authority wallet.
        </p>
      </div>
      <AdminPanel />
    </div>
  );
}
