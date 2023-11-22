import Navigate from "@/components/shared/navigate";

export default function Page() {
  return (
    <main>
      <div className="flex py-12 items-center justify-center bg-amber-400 w-full min-h-screen text-white">
        <Navigate href="/page3">
          <p className="text-4xl underline">With useRouter()</p>
        </Navigate>
      </div>
    </main>
  );
}
