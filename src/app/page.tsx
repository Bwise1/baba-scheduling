import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="bg-black text-white">Hello Baba Scheduler Fam
      <br></br>
      <Link href="/login">
      Login
    </Link>
    <br></br>
    <Link href="/signup">
    sign up 
    </Link>
      </div>
    </main>
  );
}
