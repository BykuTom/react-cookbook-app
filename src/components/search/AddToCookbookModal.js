import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useApp } from "../../context/AppProvider";
import { RadioGroup } from "@headlessui/react";
import { CreateCookBookModal } from "../myCookbooks/CreateCookbookModal";

export const AddToCookbookModal = ({ isOpen, closeModal, recipe }) => {
  const { state, dispatch } = useApp();
  const [current, setCurrent] = useState("None");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setCurrent("None");
            closeModal();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Recipe to a Cookbook
                  </Dialog.Title>
                  <div className="w-full h-[16rem] bg-orange-100 mt-4 rounded-md p-2 overflow-scroll flex flex-col gap-2">
                    <RadioGroup value={current} onChange={setCurrent}>
                      <RadioGroup.Label className={"sr-only"}>
                        Choose a list to display
                      </RadioGroup.Label>
                      <button
                        type="button"
                        className="btn btn-error w-full drop-shadow-md mb-2"
                        onClick={openCreateModal}
                      >
                        Add recipe to a new Cookbook
                      </button>

                      {state.cookbooks &&
                        state.cookbooks.length > 0 &&
                        state.cookbooks.map((cookbook) => {
                          return (
                            <RadioGroup.Option
                              value={cookbook.id}
                              key={cookbook.id}
                              className="mb-2"
                            >
                              {({ checked }) => (
                                <div
                                  className={
                                    checked
                                      ? "text-md text-white btn btn-warning w-full"
                                      : "text-md text-black btn btn-outline-warning w-full"
                                  }
                                >
                                  {cookbook.name}
                                </div>
                              )}
                            </RadioGroup.Option>
                          );
                        })}
                    </RadioGroup>
                  </div>
                  <div className="flex flex-row justify-evenly gap-2 mt-4">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        dispatch({
                          type: "ADD_RECIPE_TO_COOKBOOK",
                          payload: {
                            cookbookID: current,
                            recipe: recipe,
                          },
                        });
                        closeModal();
                      }}
                    >
                      Add the recipe
                    </button>
                    <button
                      type="button"
                      className="btn btn-error"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                  {isCreateModalOpen && (
                    <CreateCookBookModal
                      isOpen={isCreateModalOpen}
                      closeModal={closeCreateModal}
                    />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
