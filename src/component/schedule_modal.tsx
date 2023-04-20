import { FC, useState } from 'react'

interface ScheduleModalProps {
  close: () => void;
}

interface Doctor {
    id: string;
    name: string;
    specialties: string[];
    availability: { date: string; time: string }[];

}

const doctors: Doctor[] = [
  {
    id: "1",
    name: 'Dr. John Smith',
    specialties: ['General Medicine', 'Family Medicine'],
    availability: [
      { date: 'Monday', time: '10:00 AM - 12:00 PM' },
      { date: 'Wednesday', time: '1:00 PM - 3:00 PM' },
      { date: 'Friday', time: '10:00 AM - 12:00 PM' },
    ],
  },
  {
    id: "2",
    name: 'Dr. Sarah Johnson',
    specialties: ['Pediatrics', 'Child Psychiatry'],
    availability: [
      { date: 'Monday', time: '1:00 PM - 3:00 PM' },
      { date: 'Wednesday', time: '10:00 AM - 12:00 PM' },
      { date: 'Friday', time: '1:00 PM - 3:00 PM' },
    ],
  },
  {
    id:"3",
    name: 'Dr. Michael Lee',
    specialties: ['Cardiology', 'Internal Medicine'],
    availability: [
      { date: 'Tuesday', time: '10:00 AM - 12:00 PM' },
      { date: 'Thursday', time: '1:00 PM - 3:00 PM' },
    ],
  },
];
const ScheduleModal: FC<ScheduleModalProps> = ({ close }) => {
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('')
  const [reason, setReason] = useState<'Check-up' | 'Follow-up' | 'Pregnancy' | 'Emergency' | 'vaccination' | 'Mental care'>('Check-up');
  const [type, setType] = useState<'physical' | 'online'>('physical');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Send appointment data to server or perform other action
    console.log(`Appointment scheduled for ${date}, reason: ${reason}, type: ${type}`);

    // Close modal
    close();
  };

  const getAvailableDoctors = (reason: string, date: string) => {
    const filteredDoctors = doctors.filter((doctor) => {
      const available = doctor.availability.some((slot) => slot.date === date);
      const suitable = doctor.specialties.includes(reason);
      return available && suitable;
    });
  
    return filteredDoctors;
  };
  

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg w-96">
          <h1 className="text-lg font-semibold mb-4">Schedule an appointment</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 font-semibold" htmlFor="date">
              Date:
            </label>
            <input
                id="date"
                type="datetime-local"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
              className="border border-gray-300 rounded px-2 py-1 mb-4"
            />
            <label className="block mb-2 font-semibold" htmlFor="reason">
              Reason:
            </label>
            <select
              id="reason"
              name="reason"
              value={reason}
              onChange={(event) => setReason(event.target.value as typeof reason)}
              className="border border-gray-300 rounded px-2 py-1 mb-4"
            >
              <option value="Check-up">Check-up</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Pregnancy">Pregnancy</option>
              <option value="Emergency">Emergency</option>
              <option value="vaccination">Vaccination</option>
              <option value="Mental care">Mental care</option>
            </select>
            <label className="block mb-2 font-semibold" htmlFor="type">
              Type:
            </label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={(event) => setType(event.target.value as typeof type)}
              className="border border-gray-300 rounded px-2 py-1 mb-4"
            >
              <option value="physical">Physical</option>
              <option value="online">Online</option>
            </select>

            <div className="flex justify-between">
            <label htmlFor="doctor">Doctor:</label>
                <select
                id="doctor"
                name="doctor"
                value={doctor}
                onChange={(event) => setDoctor(event.target.value)}
                >
                <option value="">Select a doctor</option>
                {getAvailableDoctors(reason, date.split('T')[0]).map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                    </option>
                ))}
                </select>

            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Schedule
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
