import Image from "next/image";

import {
  RadioGroupIndicator,
  RadioGroupItem,
} from "@radix-ui/react-radio-group";

import { modes } from "~/lib/imgGen/data";

import { RadioGroup } from "../ui/radio-group";

const ImgModeSelector = () => {
  return (
    <RadioGroup
      defaultValue={modes[0]!.key}
      className="no-scrollbar flex gap-2 overflow-x-scroll p-2"
    >
      {modes.map((mode, i) => {
        return (
          <RadioGroupItem
            value={mode.key}
            id={mode.key}
            key={i}
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg ring-2 ring-transparent ring-offset-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <RadioGroupIndicator className="absolute left-0 top-0 z-10 h-full w-full rounded-lg ring-2 ring-inset ring-primary" />
            <Image src={mode.img} alt={mode.name} className="absolute" fill />
            <span className="absolute bottom-0 flex h-6 w-full items-center justify-center bg-foreground/60 text-center text-background">
              {mode.name}
            </span>
          </RadioGroupItem>
        );
      })}
    </RadioGroup>
  );
};

export default ImgModeSelector;
