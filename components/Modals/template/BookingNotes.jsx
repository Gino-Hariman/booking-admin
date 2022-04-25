import { Button } from '@/components/Buttons';

const BookingNotes = ({ onChange, value, onSubmit }) => {
  return (
    <div className="relative flex-auto mb-4">
      <input
        value={value}
        onChange={onChange}
        className="input"
        id="notes"
        type="text"
        placeholder="Write student booking notes"
        // value={input}
      />
      <div className="flex items-center justify-center mt-12">
        <Button title="Continue" onClick={onSubmit} />
      </div>
    </div>
  );
};
export default BookingNotes;
