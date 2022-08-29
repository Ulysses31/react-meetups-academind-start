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
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}
