import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNavBar } from './SideNavBar';
import { TopAppBar } from './TopAppBar';

export const AppLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <SideNavBar />
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        <TopAppBar />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
