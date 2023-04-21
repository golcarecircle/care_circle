type AppointmentFormProps = {
  doctors: Doctor[];
  onSubmit: (doctorId: number, date: string) => void;
};

const AppointmentForm = ({ doctors, onSubmit }: AppointmentFormProps) => {
  const [step, setStep] = useState<number>(1);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleNextStep = (doctorId: number) => {
    setSelectedDoctor(doctors.find((doctor) => doctor.id === doctorId) || null);
    setStep(2);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleSubmit = (doctorId: number, date: string) => {
    onSubmit(doctorId, date);
  };

  return (
    <div>
      {step === 1 && <StepOne doctors={doctors} onNext={handleNextStep} />}
      {step === 2 && (
        <StepTwo
          selectedDoctor={selectedDoctor}
          onBack={handleBackStep}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

<div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white p-6 rounded-lg w-96">
      <h1 className="text-lg font-semibold mb-4">Schedule an appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Schedule
          </button>
        </div>
      </form>
    </div>
  </div>
</div>;
