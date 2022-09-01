import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
import { useContext } from "react";
import AppContext from "../../store/context";

export default function NewMeetupForm({ onAddMeetup }) {
  const context = useContext(AppContext);
  const { totalMeetups } = context.meetups;

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddres = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      id: totalMeetups + 1,
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddres,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  ref={titleInputRef}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  ref={addressInputRef}
                />
              </div>

              <div className="col-span-6 sm:col-span-6 xl:col-span-3">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image Url
                </label>
                <input
                  type="url"
                  name="image"
                  id="image"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  ref={imageInputRef}
                />
              </div>

              <div className="col-span-6 sm:col-span-6 xl:col-span-3">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  required
                  minLength={50}
                  maxLength={100}
                  rows={5}
                  ref={descriptionInputRef}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>

    // <Card>
    //   <form className={classes.form} onSubmit={handleSubmit}>
    //     <div className={classes.control}>
    //       <label htmlhtmlFor="title">Title</label>
    //       <input type="text" id="title" ref={titleInputRef} />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlhtmlFor="image">Image</label>
    //       <input type="url" id="image" ref={imageInputRef} />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlhtmlFor="address">Address</label>
    //       <input type="text" id="address" ref={addressInputRef} />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlhtmlFor="description">Description</label>
    //       <textarea
    //         id="description"
    //         rows="5"
    //         ref={descriptionInputRef}
    //       ></textarea>
    //     </div>
    //     <div className={classes.actions}>
    //       <button type="submit">Add Meetup</button>
    //     </div>
    //   </form>
    // </Card>
  );
}
