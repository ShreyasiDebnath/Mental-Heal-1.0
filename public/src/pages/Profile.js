import React, { useState } from 'react';
import './Profile.css';
import BookingConfirmation from './BookingConfirmation'
import SlotBooking from './SlotBooking'

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

  const initialRatings = initialDoctors.map(() => ({
    totalRatings: 0,
    totalRatingPoints: 0,
  }));

  const [ratings, setRatings] = useState(initialRatings);

  const updateRating = (doctor) => {
    const index = initialDoctors.indexOf(doctor);
    const { totalRatings, totalRatingPoints } = ratings[index];
    const rating = totalRatings === 0 ? 0 : (totalRatingPoints / totalRatings).toFixed(1);
    return rating;
  };

  const rateDoctor = (doctor, stars) => {
    const index = initialDoctors.indexOf(doctor);
    const updatedRatings = [...ratings];
    updatedRatings[index].totalRatings += 1;
    updatedRatings[index].totalRatingPoints += stars;
    setRatings(updatedRatings);
  };

  const [bookingStatus, setBookingStatus] = useState('');
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');

  const bookAppointment = (doctor) => {
    const { name } = doctor;
    // Your appointment booking logic here

    // Assuming a successful booking
    alert(`Appointment booked with ${name}`);
    setBookingStatus('Appointment booked successfully!');
  };

  return (
    <div className="profile-container">
      {initialDoctors.map((doctor, index) => (
        <section key={index} className="profile">
          <figure>
            <img className="profile-img" src={doctor.image} alt={`Profile of ${doctor.name}`} />
            <figcaption className="profile-name">{doctor.name}</figcaption>
          </figure>

          <div className="profile-details">
            <p>Qualifications: {doctor.qualifications}</p>
            <p>Languages: {doctor.languages}</p>
            <p>Fees: {doctor.fees}</p>
          </div>

          <div className="rating">
            Rating: <span id={`doctor-rating-${index}`}>{updateRating(doctor)}</span>
            {[5, 4, 3, 2, 1].map((stars) => (
              <button key={stars} onClick={() => rateDoctor(doctor, stars)}>
                {stars} <i className="fas fa-star"></i>
              </button>
            ))}
          </div>

          <button onClick={() => bookAppointment(doctor)}>Book Appointment</button>
          {bookingStatus && <p>{bookingStatus}</p>}
          {isAppointmentBooked ? (
            <div>
              <BookingConfirmation />
              {/* <TransactionPage doctorName={doctor.name} selectedSlot={selectedSlot} /> */}
            </div>
          ) : (
            <SlotBooking onSlotBooked={(slot) => setSelectedSlot(slot)} />
          )}
        </section>
      ))}
    </div>
  );
}

export default Profile;
