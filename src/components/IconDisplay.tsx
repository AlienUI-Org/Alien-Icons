import { useState } from "react";
import { FiClipboard, FiCheck } from "react-icons/fi";
import { icons } from "../dummydata/svgdata";

function IconDisplay({
  variant = "outline",
}: {
  variant?: "outline" | "solid";
}) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (svg: string, index: number) => {
    try {
      await navigator.clipboard.writeText(svg);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 cursor-pointer">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="w-38 h-36 flex justify-center items-center border border-gray-200 shadow rounded-2xl mb-4 relative group">
              <div
                dangerouslySetInnerHTML={{ __html: icon.variants[variant] }}
              />

              <button
                onClick={() => copyToClipboard(icon.variants[variant], index)}
                className="absolute top-2 right-2 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-200 shadow"
                title="Copy SVG"
              >
                {copiedIndex === index ? (
                  <FiCheck size={16} className="text-green-600" />
                ) : (
                  <FiClipboard size={16} className="text-gray-600" />
                )}
              </button>
            </div>
            <h1 className="text-xs text-center mb-6">{icon.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconDisplay;
