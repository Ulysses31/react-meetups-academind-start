import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../store/context";

export default function MainNavigation() {
  const context = useContext(AppContext);
  const { totalFavorites } = context.favorites;

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to={'/'}
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Meetups
                </Link>

                <Link
                  to={'/new-meetup'}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  New Meetup
                </Link>

                <Link
                  to={'/favorites'}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Favorites
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
