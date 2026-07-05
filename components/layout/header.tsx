import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">

      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search clients..."
          className="w-full rounded-lg border pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600"></div>

          <div>
            <p className="font-semibold">Kaushik</p>
            <p className="text-sm text-gray-500">Agency Owner</p>
          </div>
        </div>

      </div>

    </header>
  );
}