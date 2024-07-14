import React, { useState } from 'react';
import './Profile.css';
import BookingConfirmation from './BookingConfirmation';
import SlotBooking from './SlotBooking';
import TransactionPage from './TransactionPage';

function DoctorProfile({ doctor }) {
  const [rating, setRating] = useState({
    totalRatings: 0,
    totalRatingPoints: 0,
  });
  const [bookingStatus, setBookingStatus] = useState('');
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');

  const updateRating = () => {
    const calculatedRating =
      rating.totalRatings === 0
        ? 0
        : (rating.totalRatingPoints / rating.totalRatings).toFixed(1);
    return calculatedRating;
  };

  const rateDoctor = (stars) => {
    setRating((prevRating) => ({
      totalRatings: prevRating.totalRatings + 1,
      totalRatingPoints: prevRating.totalRatingPoints + stars,
    }));
  };

  const bookAppointment = () => {
    // Your appointment booking logic here

    // Assuming a successful booking
    alert(`Appointment booked with ${doctor.name}`);
    setBookingStatus('Appointment booked successfully!');

    // Modify the booking status after the appointment is booked
    setTimeout(() => {
      setBookingStatus('Appointment confirmed');
    }, 2000); // This is a placeholder delay; you can adjust it as needed
    setIsAppointmentBooked(true);
  };

  return (
    <section className="profile">
      <figure>
        {/* <img className="profile-img" src={doctor.image} alt={`Profile of ${doctor.name}`} /> */}
        <figcaption className="profile-name">{doctor.name}</figcaption>
      </figure>

      <div className="profile-details">
        <p>Qualifications: {doctor.qualifications}</p>
        <p>Languages: {doctor.languages}</p>
        <p>Fees: {doctor.fees}</p>
      </div>

      <div className="rating">
        Rating: <span>{updateRating()}</span>
        {[5, 4, 3, 2, 1].map((stars) => (
          <button key={stars} onClick={() => rateDoctor(stars)}>
            {stars} <i className="fas fa-star"></i>
          </button>
        ))}
      </div>

      <button onClick={bookAppointment}>Book Appointment</button>
      {bookingStatus && <p>{bookingStatus}</p>}
      {isAppointmentBooked ? (
        <div>
          <BookingConfirmation />
          <TransactionPage doctorName={doctor.name} selectedSlot={selectedSlot} />
        </div>
      ) : (
        <SlotBooking onSlotBooked={(slot) => setSelectedSlot(slot)} />
      )}
    </section>
  );
}

function Profile() {
  const initialDoctors = [
    {
      name: 'Dr. S Paul',
      qualifications: 'MBBS, MD',
      languages: 'English, Hindi',
      fees: 1500,
      image: 'image/pic2.jpeg',
    },
    {
      name: 'Dr. R Roy',
      qualifications: 'MBBS, MS',
      languages: 'English, Bengali',
      fees: 2000,
      image: 'image/pic3.jpeg',
    },
  ];

  return (
    <div className="profile-container">
      {initialDoctors.map((doctor, index) => (
        <DoctorProfile key={index} doctor={doctor} />
      ))}
    </div>
  );
}

export default Profile;

