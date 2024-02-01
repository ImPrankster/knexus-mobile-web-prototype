"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Palette, Scaling } from "lucide-react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import ImgDual from "~/components/imgGen/imgDual";
import ImgModeSelector from "~/components/imgGen/imgModeSelector";
import ImgTweaks from "~/components/imgGen/imgTweaks";
import RatioSelector from "~/components/imgGen/ratioSelector";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Input } from "~/components/ui/input";
import { FormSchema } from "~/lib/imgGen/schema";

const CreatePage1 = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <main className="flex flex-1 flex-col gap-2 pt-2">
      <div className="p-4 px-8">
        <ImgDual
          original="https://fastly.picsum.photos/id/367/500/500.jpg?hmac=Wzm0QDfnRl9RI_ViqGafJD9vlS12uturZnvzQkRyk0w"
          modified="https://fastly.picsum.photos/id/569/500/500.jpg?hmac=ehWrTx8EtAj6iSA-Wv78CBS2J-eAnucsXU-WJmartg8"
        />
      </div>

      <ImgModeSelector />
      <div className="flex flex-col gap-2 p-2">
        <div className="flex w-full items-center space-x-2">
          <Input type="email" placeholder="Input Content" />
          <Button type="submit">Submit</Button>
        </div>
        <div className="flex gap-2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <Scaling />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col p-2">
              <DrawerHeader className="font-bold">Set Ratio</DrawerHeader>
              <RatioSelector />
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <Palette />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col p-2">
              <ImgTweaks />
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </main>
  );
};

export default CreatePage1;
