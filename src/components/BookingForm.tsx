import { useState } from "react";
import { Check, CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLanguage } from "@/contexts/LanguageContext";
import { useBooking } from "@/contexts/BookingContext";
import { generateBookingUrl } from "@/lib/booking";

export default function BookingForm() {
  const { t } = useLanguage();
  const { openBookingModalWithDates } = useBooking();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

    const handleCheckAvailability = () => {
    if (!startDate || !endDate) return;

    // Smart Safari Detector
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      // Apple devices: Generate the URL and load it in the same page (redirect)
      const url = generateBookingUrl(startDate, endDate);
      window.location.href = url;
    } else {
      // Chrome/Android: Load the beautiful iFrame overlay
      openBookingModalWithDates(startDate, endDate);
    }
    
    // Show confirmation state (if you have this in your Amigo project)
    setSubmitted(true);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCheckAvailability();
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="glass-card p-6 space-y-6 animate-fade-in [animation-delay:200ms]"
    >
      <h3 className="text-2xl font-bold text-center mb-6">{t.bookingForm.title}</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Check-in Date */}
          <div className="space-y-2">
            <label htmlFor="check-in" className="block text-sm font-medium">
              {t.bookingForm.checkIn}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-in"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>{t.bookingForm.selectDate}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Check-out Date */}
          <div className="space-y-2">
            <label htmlFor="check-out" className="block text-sm font-medium">
              {t.bookingForm.checkOut}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="check-out"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>{t.bookingForm.selectDate}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                  disabled={(date) => date < (startDate || new Date())}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full btn-primary relative"
        disabled={!startDate || !endDate}
      >
        {submitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            {t.bookingForm.bookingConfirmed}
          </>
        ) : (
          <>
            <Users className="mr-2 h-4 w-4" />
            {t.bookingForm.checkAvailability}
          </>
        )}
      </Button>

      {/* Optional: Add a small note about what happens */}
      <p className="text-xs text-center text-muted-foreground">
        You'll be redirected to our secure booking system to see room availability and prices
      </p>
    </form>
  );
}