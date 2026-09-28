import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-sm tracking-[0.16em] uppercase text-muted-foreground">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-navy">That page is not on the map</h1>
      <p className="mt-3 text-muted-foreground">
        We publish city pages only when there is unique content. Try Indore, Bhopal, Pune, or the calculator.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild className="bg-navy">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/locations">Locations</Link>
        </Button>
      </div>
    </div>
  );
}
