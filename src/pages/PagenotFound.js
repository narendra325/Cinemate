import { Link } from "react-router-dom";
export default function PagenotFound() {
  return (
    <main>
      <section className="flex flex-col justify-center py-7">
        <div className="flex flex-col items-center py-7">
          <p className="text-5xl font-sans font-bold text-center dark:text-slate-100 ">
            PAGE NOT FOUND
          </p>
          <div className="max-w-lg py-7 my-7">
            <img
              src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
              alt="oops"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back to cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
