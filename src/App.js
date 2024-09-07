import React from "react";
import TabsComponent from "./components/TabsComponent";
import GalleryComponent from "./components/GalleryComponent";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-5xl space-y-6">
        {/* Tabs section */}
        <TabsComponent />

        {/* Divider line */}
        <div className="border-t-2 border-gray-700 w-full"></div>

        {/* Gallery section */}
        <GalleryComponent />
      </div>
    </div>
  );
};

export default App;
