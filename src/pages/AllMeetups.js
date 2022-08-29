import MeetupList from "../components/meetups/MeetupList";
import { useContext } from "react";
import AppContext from "../store/context";

export default function AllMeetups() {
  const context = useContext(AppContext);
  const { meetupsList, totalMeetups } = context.meetups;

  let content;
  if (totalMeetups === 0) {
    content = <p>There are no meetups yet.</p>;
  } else {
    content = <MeetupList meetups={meetupsList} />;
  }

  return (
    <section>
      <h1>AllMeetups</h1>
      {content}
    </section>
  );
}
