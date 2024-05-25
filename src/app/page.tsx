import DataTable from "./DataTable";
import { Header } from "./Header";
import Image from 'next/image'
import Logo from '@/app/assets/Mask group.png'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export type User = {
  id: string;
  task: string;
  importance: string
};

export default async function Home() {
  const data: User[] = (await prisma.user.findMany()) as any;

  return (
    <main className=" min-w-full min-h-screen flex flex-col ">
      <header className="min-w-screen min-h-[10vh] shadow-xl content-center px-6 justify-between flex">
        <span className="flex">
        <Image src={Logo} alt="" width={65} height={55}></Image>
        <h3 className="self-center uppercase text-bold tracking-wide text-zinc-600">Task Manager</h3>
        </span>
      <Header></Header>
      </header>
      <div className="max-h-[90vh] min-w-screen p-8 text-sky-400">
      <DataTable data={data}></DataTable>
      </div>
    </main>
    
  );
}
