import { useState } from "react";

import Image from "next/image";

import { ImgDualSlider } from "./imgDualSlider";

const ImgDual = ({
  original,
  modified,
}: {
  original: string;
  modified: string;
}) => {
  const [displayPosition, setDisplayPosition] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-lg border-4 border-primary">
      <Image
        width={500}
        height={500}
        src={original}
        alt=""
        className="touch-none"
      />
      <ImgDualSlider
        className="absolute top-[47%] z-10"
        defaultValue={[50]}
        min={2}
        max={98}
        step={0.5}
        onValueChange={(value) => setDisplayPosition(value[0]!)}
      />
      <Image
        width={500}
        height={500}
        src={modified}
        alt=""
        className="absolute inset-0 touch-none"
        style={{
          clipPath: `polygon(0 0, ${displayPosition}% 0, ${displayPosition}% 100%, 0 100%)`,
        }}
      />
    </div>
  );
};

export default ImgDual;
