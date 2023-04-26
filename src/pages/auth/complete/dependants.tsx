import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addDependant } from "@/store/slices/dependantsSlice";

interface DependantsProps {}

const Dependants: FC<DependantsProps> = ({}) => {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", age: "" });
  const dispatch = useDispatch();

  const handleAddClick = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };
  

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowForm(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 mt-6 mb-0 space-y-4 rounded-lg sm:p-6 lg:p-8">
      <div className="h-fit w-full ">
        <div className="flex justify-between">
          <h1 className="text-lg font-lg ">Dependants:</h1>
          <div className="relative">
            <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
              <button
                onClick={handleAddClick}
                className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                ADD
              </button>
            </div>

            {showForm && (
              <div
                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                
              >
                <div className="p-2">
                  <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
                    Add a dependant
                  </strong>

                </div>
                <form onSubmit={handleFormSubmit}>
              <div className="p-2">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                      className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                    >
                      Email
                    </span>
                  </label>

              </div>
                  <div className="p-2">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm text-green-700 hover:bg-red-50"
                      >
                        Add Depedent
                      </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dependants;
