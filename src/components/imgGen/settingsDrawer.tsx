"use client";

import { useState } from "react";

import { Palette, Scaling } from "lucide-react";
import { Drawer } from "vaul";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ImgTweaks from "./imgTweaks";
import RatioSelector from "./ratioSelector";

export function SettingsDrawer() {
  const [snap, setSnap] = useState<number | string | null>("79px");
  return (
    <Drawer.Root
      snapPoints={["79px", "228px", "500px"]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      modal={false}
      dismissible={false}
      open
    >
      <Drawer.Portal>
        <Drawer.Content className="fixed bottom-16 left-0 right-0 z-10 flex h-full select-none flex-col rounded-t-xl bg-background shadow-[0_35px_60px_25px_rgba(0,0,0,0.3)] outline-none">
          <div className="mt-2 h-[8px] w-24 place-self-center rounded-full bg-neutral-500" />
          <div className="mx-auto flex w-full flex-col p-2 px-4">
            <div className="flex w-full items-center space-x-2">
              <Input type="email" placeholder="Input Content" />
              <Button type="submit">Submit</Button>
            </div>
          </div>
          <Tabs defaultValue="ratio" className="w-full p-2 px-4">
            <div className="flex">
              <TabsList>
                <TabsTrigger value="ratio">
                  <Scaling size={20} />
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Palette size={20} />
                </TabsTrigger>
              </TabsList>
              <div className="flex-1" />
              <Button variant={"inverted"} className="rounded-full">
                Choose Picture
              </Button>
            </div>
            <TabsContent value="ratio">
              <RatioSelector />
            </TabsContent>
            <TabsContent
              value="settings"
              className="flex h-[350px] flex-col gap-2 overflow-y-scroll"
            >
              <ImgTweaks />
            </TabsContent>
          </Tabs>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
