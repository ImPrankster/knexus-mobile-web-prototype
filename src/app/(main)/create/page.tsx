"use client";

import ImgDual from "~/components/imgGen/imgDual";
import { SettingsDrawer } from "~/components/imgGen/settingsDrawer";
import { Button } from "~/components/ui/button";

const CreatePage = () => {
  return (
    <main className="flex flex-1 flex-col">
      <ImgDual
        original="https://fastly.picsum.photos/id/367/500/500.jpg?hmac=Wzm0QDfnRl9RI_ViqGafJD9vlS12uturZnvzQkRyk0w"
        modified="https://fastly.picsum.photos/id/569/500/500.jpg?hmac=ehWrTx8EtAj6iSA-Wv78CBS2J-eAnucsXU-WJmartg8"
      />
      <Button
        variant={"outline"}
        onClick={() => {
          console.log("CLICKED");
        }}
      >
        Test
      </Button>
      <SettingsDrawer />
    </main>
  );
};

export default CreatePage;
