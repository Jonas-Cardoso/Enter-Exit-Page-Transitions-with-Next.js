import Navigate from "@/components/shared/navigate";

export default function Page() {
  return (
    <main>
      <div className="flex py-12 items-center justify-center bg-red-600 w-full min-h-screen text-white">
        <Navigate href="/page1">
          <p className="text-4xl underline">Navigating</p>
        </Navigate>
      </div>
    </main>
  );
}
