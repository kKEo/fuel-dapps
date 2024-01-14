import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AirbnbContractAbi__factory } from '../../contracts';
import { convertToTimestamp } from '../utils/Convert'

interface BookingFormProps {
    account: string; 
}

const CONTRACT_ID = process.env.REACT_APP_CONTRACT_ID;

const BookingForm: React.FC<BookingFormProps> = ({account}) => {
    const [bookingDates, setBookingDates] = useState({
        bookingFrom: '',
        bookingTo: ''
    });
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [bookingId, setBookingId] = useState(0);
    const { id } = useParams<{ id: string }>();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookingDates({
            ...bookingDates,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(id);
        if (window.fuel && id !== undefined && CONTRACT_ID !== undefined) {
            
            const wallet = await window.fuel.getWallet(account);
            const contract = AirbnbContractAbi__factory.connect(CONTRACT_ID, wallet);
            const bookingFrom = await convertToTimestamp(bookingDates.bookingFrom);
            const bookingTo = await convertToTimestamp(bookingDates.bookingTo);
            console.log(bookingFrom, bookingTo);
            console.log()
            const { logs } = await contract.functions.book(id, bookingFrom, bookingTo).txParams({gasPrice:1}).call();
            console.log(logs[0].booking_id.toString()); 
            setBookingSuccess(true);
            setBookingId(logs[0].booking_id.toString());

        console.log('Booking Dates:', bookingDates);
            }
        } 

    return (
        <div>
            {bookingSuccess? (
                <>
                    <h1>Booking Successful</h1>
                    <p>Booking ID: {bookingId}</p>
                    <p>From: {bookingDates.bookingFrom}</p>
                    <p>To: {bookingDates.bookingTo}</p>
                    <p>Property ID: {id}</p>
                    <button onClick={() => window.location.reload()}>Refresh</button>
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>From</label>
                            <input
                                type="date"
                                name="bookingFrom"
                                value={bookingDates.bookingFrom}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>To</label>
                            <input
                                type="date"
                                name="bookingTo"
                                value={bookingDates.bookingTo}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default BookingForm;
