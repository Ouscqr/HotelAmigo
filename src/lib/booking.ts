import { format } from "date-fns";

const BASE_URL = "https://bookingengine.mylighthouse.com/amigo-budget-hostel-amsterdam/Rooms/Select";
const DEFAULT_URL = "https://bookingengine.mylighthouse.com/amigo-budget-hostel-amsterdam";

export function generateBookingUrl(checkIn?: Date, checkOut?: Date, guests?: number): string {
  if (!checkIn || !checkOut) {
    return DEFAULT_URL;
  }

  // Fastbooker expects non-padded months and days (e.g. 2024-5-9 instead of 2024-05-09)
  const arrival = format(checkIn, "yyyy-M-d");
  const departure = format(checkOut, "yyyy-M-d");
  
  let url = `${BASE_URL}?lang=en&Arrival=${arrival}&Departure=${departure}`;
  
  if (guests) {
    // We can append guests parameter here if needed by the booking engine
    // E.g., url += `&Adults=${guests}`;
  }

  return url;
}
