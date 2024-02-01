"use client";

import ImgDual from "~/components/imgGen/imgDual";
import ImgModeSelector from "~/components/imgGen/imgModeSelector";
import { SettingsDrawer } from "~/components/imgGen/settingsDrawer";

const CreatePage = () => {
  return (
    <main className="flex flex-1 flex-col gap-2 pt-2">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        AI Drawing
      </h1>
      <div className="p-4 px-8">
        <ImgDual
          original="https://fastly.picsum.photos/id/367/500/500.jpg?hmac=Wzm0QDfnRl9RI_ViqGafJD9vlS12uturZnvzQkRyk0w"
          modified="https://fastly.picsum.photos/id/569/500/500.jpg?hmac=ehWrTx8EtAj6iSA-Wv78CBS2J-eAnucsXU-WJmartg8"
        />
      </div>
      <ImgModeSelector />
      <SettingsDrawer />
    </main>
  );
};

export default CreatePage;
