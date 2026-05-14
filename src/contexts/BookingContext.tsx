import React, { createContext, useContext, useState, ReactNode } from "react";
import { generateBookingUrl } from "@/lib/booking";

interface BookingContextType {
  isModalOpen: boolean;
  bookingUrl: string;
  openBookingModal: (url?: string) => void;
  openBookingModalWithDates: (checkIn?: Date, checkOut?: Date, guests?: number) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingUrl, setBookingUrl] = useState("");

  const openBookingModal = (url?: string) => {
    setBookingUrl(url || generateBookingUrl());
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  };

  const openBookingModalWithDates = (checkIn?: Date, checkOut?: Date, guests?: number) => {
    const url = generateBookingUrl(checkIn, checkOut, guests);
    openBookingModal(url);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; // Restore body scroll
    setTimeout(() => setBookingUrl(""), 300); // Clear URL after animation
  };

  return (
    <BookingContext.Provider
      value={{
        isModalOpen,
        bookingUrl,
        openBookingModal,
        openBookingModalWithDates,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
