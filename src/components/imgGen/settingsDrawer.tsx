"use client";

import { useState } from "react";
import { Drawer } from "vaul";

export function SettingsDrawer() {
  const [snap, setSnap] = useState<number | string | null>("200px");

  return (
    <Drawer.Root
      snapPoints={["200px", "400px", "600px"]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      modal={false}
      dismissible={false}
      open
    >
      <Drawer.Portal>
        <Drawer.Content className="fixed bottom-16 left-0 right-0 z-10 flex h-full flex-col rounded-t-xl border-t-2 border-t-border bg-background shadow-[0_35px_60px_25px_rgba(0,0,0,0.3)]">
          <div className="mx-auto flex w-full flex-col p-4 pt-5">
            <h1 className="mt-2 text-2xl font-medium">
              Voluptate amet ipsum elit. Dolore culpa ad minim fugiat laboris
              magna. Cillum irure incididunt incididunt esse qui. Id anim nulla
              non enim sit irure amet nisi culpa exercitation deserunt.
            </h1>
            <p className="mb-6 mt-1 text-sm text-gray-600">
              Voluptate amet ipsum elit. Dolore culpa ad minim fugiat laboris
              magna. Cillum irure incididunt incididunt esse qui. Id anim nulla
              non enim sit irure amet nisi culpa exercitation deserunt.
            </p>
            <p className="text-gray-600">
              Voluptate amet ipsum elit. Dolore culpa ad minim fugiat laboris
              magna. Cillum irure incididunt incididunt esse qui. Id anim nulla
              non enim sit irure amet nisi culpa exercitation deserunt.
            </p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
