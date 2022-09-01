import MeetupList from "../components/meetups/MeetupList";
import { useContext } from "react";
import AppContext from "../store/context";

export default function AllMeetups() {
  const context = useContext(AppContext);
  const { meetupsList, totalMeetups } = context.meetups;

  let content;
  if (totalMeetups === 0) {
    content = (
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        There are no meetups yet.
      </h2>
    );
  } else {
    content = <MeetupList meetups={meetupsList} />;
  }

  return (
    <section>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            All Meetups
          </h1>
        </div>
      </header>
      {content}
    </section>
  );
}
