import React, { useState } from 'react';

function SlotBooking({ onSlotBooked }) {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isSlotBooked, setIsSlotBooked] = useState(false);

  const availableSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const bookSlot = () => {
   
    // You can check slot availability and make a reservation
  
    setIsSlotBooked(true);
    onSlotBooked(selectedSlot);
  };

  return (
    <div className="slot-booking">
      <h2>Slot Booking</h2>
      {isSlotBooked ? (
        <p>Slot booked successfully for {selectedSlot}</p>
      ) : (
        <div>
          <p>Select a time slot:</p>
          <select onChange={(e) => setSelectedSlot(e.target.value)}>
            <option value="">Select</option>
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <button onClick={() => bookSlot()}>Book Slot</button>
        </div>
      )}
    </div>
  );
}

export default SlotBooking;
