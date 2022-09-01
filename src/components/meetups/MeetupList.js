import MeetupItem from "./MeetupItem";

export default function MeetupList(props) {
  const { meetups } = props;
  return (
    <div className="grid lg:grid-cols-2 gap-0">
      {meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </div>
  );
}
