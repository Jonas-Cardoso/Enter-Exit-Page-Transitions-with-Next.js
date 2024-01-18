import Navigate from "@/components/shared/navigate";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col gap-5 py-12 items-center justify-center bg-green-200-600 w-full min-h-screen text-white bg-teal-400">
        <Navigate href="/">
          <p className="text-4xl underline">Simple 🎉</p>
        </Navigate>
        <p className="py-4 text-center">Add some network throttling to see the loading states</p>
      </div>
    </main>
  );
}

import Navigate from "@/components/shared/navigate";

export default function Page() {
  return (
    <main>
      <div className="flex  flex-col gap-5 py-12 items-center justify-center bg-green-200-600 w-full min-h-screen text-white bg-teal-400">
        <Navigate href="/">
          <p className="text-4xl underline">Simple 🎉</p>
        </Navigate>
      </div>
    </main>
  );
}
