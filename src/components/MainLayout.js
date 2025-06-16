import SidebarWrapper from "./SidebarWrapper";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white text-black font-sans">
      {/* Sidebar (left column) */}
      <div className="w-[250px] border-r border-gray-200">
        <SidebarWrapper />
      </div>

      {/* Main feed (center column) */}
      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-[600px] border-x border-gray-200">
          {children}
        </div>
      </main>

      {/* Right column (optional widgets) */}
      <aside className="w-full md:w-[250px] p-4 border-t md:border-t-0 md:border-l border-gray-200 bg-white">
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Trends for you</h2>
          <p className="text-sm text-gray-500">#NextJS</p>
          <p className="text-sm text-gray-500">#TailwindCSS</p>
          <p className="text-sm text-gray-500">#React</p>
          {/* Add more dummy trends if you like */}
        </div>
      </aside>
    </div>
  );
}