import BuyTicketCard from "@/components/BuyTicketCard";

export default function BuyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#00FF9C]">
          Get Your Ticket
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Your chance to win is just one transaction away. Purchase your ticket
          below.
        </p>
      </div>
      <BuyTicketCard />
    </div>
  );
}
