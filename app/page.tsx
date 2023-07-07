import Coin from "@/components/3d/coin";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col layout">
      <div className="h-[50vh] w-full">
        <Coin />
      </div>
      <div>
        <Link
          href={`/quest`}
          className="bg-[#ff0000] border-2 transition-all hover:bg-white hover:text-[#ff0000] flex items-center gap-2 border-[#ff0000] font-bold px-10 py-4 rounded-3xl text-sm text-white"
        >
          Earn Tune Coins
        </Link>
      </div>
    </main>
  );
}
