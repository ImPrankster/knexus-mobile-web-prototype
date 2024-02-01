import { ratios } from "~/lib/imgGen/data";

const RatioSelector = () => {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto">
      {ratios.map((ratio, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-md p-1 font-bold transition-colors active:bg-black/10"
          >
            <div className="flex h-16 w-16 flex-col place-content-center place-items-center rounded-md shadow-md">
              <div
                className="rounded-sm bg-zinc-600"
                style={{ width: ratio.ratio * 27, height: 27 }}
              />
              <p className="text-xs">{ratio.name}</p>
            </div>
            <p className="mx-1 text-center text-xs">{ratio.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RatioSelector;
