import { useBooking } from "@/contexts/BookingContext";
import { X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BookingModal() {
  const { isModalOpen, closeBookingModal, bookingUrl } = useBooking();
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setIsLoading(true);
    }
  }, [isModalOpen, bookingUrl]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background animate-in fade-in zoom-in duration-300">
      <div className="absolute top-4 right-4 z-[101]">
        <button
          onClick={closeBookingModal}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-200 shadow-md"
          aria-label="Close booking modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <div className="relative flex-1 w-full h-full bg-background">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground z-0">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
            <p className="text-lg font-medium animate-pulse">Connecting to secure booking...</p>
          </div>
        )}
        
        {bookingUrl && (
          <iframe
            src={bookingUrl}
            className={cn(
              "w-full h-full border-none relative z-10 transition-opacity duration-500",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            title="Secure Booking Engine"
            onLoad={() => setIsLoading(false)}
            allow="payment; fullscreen"
          />
        )}
      </div>
    </div>
  );
}
