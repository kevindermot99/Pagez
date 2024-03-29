import React, { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

function BookModal({ selectedBook, closeModal }) {
  if (!selectedBook) {
    // document.getElementById('book').classList.remove('active')
    return null;
  }

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div
      id="book"
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] bg-black bg-opacity-20 overscroll-contain z-50 flex items-center max-sm:items-end justify-center animate-fade"
    >
      <div className="bg-white h-fit max-h-[90vh] w-[100%] max-w-[900px] overflow-y-auto overscroll-contain rounded-lg max-sm:rounded-none px-6 py-5 max-sm:px-2 max-sm:py-2 animate-goingTop ">
        <div className=" h-full w-full flex flex-col items-start justify-start">
          <MdCancel
            className=" self-end text-gray-300 transit hover:text-main-color cursor-pointer text-3xl"
            onClick={closeModal}
          />
          <div className="h-full w-full flex flex-col items-start justify-start mb-5 px-5 max-sm:px-0">
            <div className="flex gap-8 max-sm:gap-4 max-sm:flex-col items-start justify-start">
              <img
                src={selectedBook.URL}
                key={selectedBook.id}
                alt="Book Poster"
                loading="lazy"
                className="h-[300px] max-sm:h-auto w-full max-sm:w-[150px] object-cover flex-1 rounded-sm drop-shadow-lg ring-1 ring-gray-100 max-sm:self-center"
              />
              <div className=" space-y-2 max-sm:space-y-1 flex flex-col">
                <h1 className=" text-[45px] leading-[50px] text-balance max-sm:p-2 max-sm:text-center font-normal">
                  {selectedBook.title}
                </h1>
                <h3 className=" font-medium max-sm:text-center ">
                  <span className=" text-main-color font-bold">Author : </span>
                  Dr. Mathew Waltford
                </h3>
                <p className=" max-sm:mt-0 max-sm:p-3 max-sm:text-center text-gray-600 line-clamp-6 max-sm:line-clamp-none text-[16px] ">
                  Lorem ipsum dolor sit amet ratione numquam non. assumenda
                  eligendi earum, velit eum laboriosam asperiores omnis iure
                  natus qui nostrum illo rerum! Quaerat incidunt aspernatur
                  officiis? Ratione, vitae.
                </p>
                <div className="flex flex-wrap gap-2 pt-3 ">
                  <a
                    href="#"
                    className="h-9 w-[90%] max-w-[160px] max-sm:max-w-none max-sm:m-auto flex justify-center items-center capitalize font-medium text-sm cursor-pointer bg-main-color text-white py-2 px-4 rounded-md transition"
                  >
                    open
                  </a>
                  <a
                    href="#"
                    className="h-9 w-[90%] max-w-[160px] max-sm:max-w-none max-sm:m-auto flex justify-center items-center capitalize font-medium text-sm cursor-pointer bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-md transition "
                  >
                    Get PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
