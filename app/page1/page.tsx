import Navigate from "@/components/shared/navigate";

export default function Page() {
  return (
    <main>
      <div className="flex py-12 items-center justify-center bg-pink-500 w-full min-h-screen text-white">
        <Navigate href="/page2">
          <p className="text-4xl underline">Programmatically</p>
        </Navigate>
      </div>
    </main>
  );
}

import Navigate from "@/components/shared/navigate";

export default function Page() {

  return (
    <main>
      <div className="flex py-12 items-center justify-center bg-pink-500 w-full min-h-screen text-white">
        <Navigate href="/page2">
          <p className="text-4xl underline">Programmatically</p>
        </Navigate>
      </div>
    </main>
  );
}
