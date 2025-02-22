import type { FunctionComponent } from "../common/types";

export const Example = (): FunctionComponent => {
  return (
    <div className="bg-green-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-6xl">Example Page</h1>
    </div>
  );
}; 