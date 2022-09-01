import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useContext } from "react";
import AppContext from "../store/context";

export default function NewMeetup() {
  const context = useContext(AppContext);
  const { addMeetup } = context.meetups;

  const handleAddMeetup = (meetup) => {
    addMeetup(meetup);
  };

  return (
    <section>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Add New Meetup
          </h1>
        </div>
      </header>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}
