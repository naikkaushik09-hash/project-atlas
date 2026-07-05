import { LayoutDashboard, Users, ClipboardList, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-zinc-950 text-white p-6">
      <h2 className="text-2xl font-bold">Project Atlas</h2>

      <p className="mt-2 text-sm text-zinc-400">
        Client Onboarding Platform
      </p>

      <nav className="mt-10 space-y-2">

        <button className="flex w-full items-center gap-3 rounded-lg bg-blue-600 px-4 py-3">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-zinc-800">
          <Users size={20} />
          Clients
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-zinc-800">
          <ClipboardList size={20} />
          Onboarding
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-zinc-800">
          <Settings size={20} />
          Settings
        </button>

      </nav>
    </aside>
  );
}