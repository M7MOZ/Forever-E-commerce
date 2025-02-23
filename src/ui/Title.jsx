/* eslint-disable react/prop-types */
export default function Title({ label, style }) {
    const spaceIndex = label.indexOf(" ");
    const text1 = label.slice(0, spaceIndex) + " ";
    const text2 = label.slice(spaceIndex + 1);
    return (
      <div className={`inline-flex gap-2 items-center mb-3 ${style}`}>
        <p className="text-gray-500">
          {text1}
          <span className="text-gray-700 font-medium">{text2}</span>
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
    );
  }
  