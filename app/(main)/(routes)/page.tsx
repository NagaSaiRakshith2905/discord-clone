import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4 p-24">
      <Button
        variant={"default"}
        size={"sm"}
      >
        default
      </Button>
      <Button
        variant={"outline"}
        size={"sm"}
      >
        outline
      </Button>
      <Button
        variant={"destructive"}
        size={"sm"}
      >
        destructive
      </Button>
      <Button
        variant={"ghost"}
        size={"sm"}
      >
        ghost
      </Button>
      <Button
        variant={"link"}
        size={"sm"}
      >
        link
      </Button>
      <Button
        variant={"secondary"}
        size={"sm"}
      >
        secondary
      </Button>
    </main>
  );
}
