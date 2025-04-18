import { useState } from "react";
import IconDisplay from "./IconDisplay";

function OutlineBtn() {
  const [variant, setVariant] = useState<"outline" | "solid">("outline");

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="flex gap-3 items-center mb-12">
        <button
          onClick={() => setVariant("outline")}
          className={`px-6 py-2 text-xs rounded-full font-semibold ${
            variant === "outline" ? "bg-purple-50" : ""
          }`}
        >
          Outline
        </button>
        <button
          onClick={() => setVariant("solid")}
          className={`px-6 py-2 text-xs rounded-full font-semibold ${
            variant === "solid" ? "bg-purple-50" : ""
          }`}
        >
          Fill
        </button>
      </div>

      <IconDisplay variant={variant} />
    </div>
  );
}

export default OutlineBtn;
