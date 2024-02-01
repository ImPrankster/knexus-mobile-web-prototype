import { Separator } from "../ui/separator";
import { Slider } from "../ui/slider";

const ImgTweaks = () => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
        Settings
      </h4>
      <p>Option</p>
      <Slider />
      <p>Option</p>
      <Slider />
      <Separator className="mt-2" />
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
        Settings
      </h4>
      <p>Option</p>
      <Slider />
      <p>Option</p>
      <Slider />
      <Separator className="mt-2" />
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
        Settings
      </h4>
      <p>Option</p>
      <Slider />
      <p>Option</p>
      <Slider />
      <Separator className="mt-2" />
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
        Settings
      </h4>
      <p>Option</p>
      <Slider />
      <p>Option</p>
      <Slider />
    </div>
  );
};

export default ImgTweaks;
