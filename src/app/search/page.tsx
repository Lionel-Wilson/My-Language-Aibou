import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Page() {
  return (
    <>
      <Navbar></Navbar>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10em",
          marginBottom: "10em",
        }}
      >
        <div role="tablist" className="tabs tabs-lifted tabs-lg w-2/3">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab "
            aria-label="Understand Expressions"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">
                    Type a Sentence to Explore Its Meaning and Grammar
                  </span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Paste your phrase here..."
                ></textarea>
                <div className="label"></div>
              </label>
            </div>

            <div className="flex justify-items-start">
              <div className="mr-20">
                <select className="select select-primary w-full max-w-md">
                  <option disabled selected>
                    Select tier
                  </option>
                  <option>Basic</option>
                  <option>Premium</option>
                </select>
              </div>
              <div className="mr-20">
                <select className="select select-primary w-full max-w-md">
                  <option disabled selected>
                    Select your native language
                  </option>
                  <option>Japanese</option>
                  <option>Korean</option>
                  <option>English</option>
                  <option>Mandarin</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Patois</option>
                </select>
              </div>
              <div>
                <select className="select select-primary w-full max-w-lg">
                  <option disabled selected>
                    Select your target language (Must match phrase language)
                  </option>
                  <option>Japanese</option>
                  <option>Korean</option>
                  <option>English</option>
                  <option>Mandarin</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Patois</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="submit"
                value="Translate and Learn"
                className="btn btn-wide btn-primary"
              />
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Dictionary"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">
                    See a word's definition in your native language
                  </span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <div className="flex justify-items-start mt-5">
                  <div className="mr-20">
                    <select className="select select-primary w-full max-w-md">
                      <option disabled selected>
                        Select tier
                      </option>
                      <option>Basic</option>
                      <option>Premium</option>
                    </select>
                  </div>
                  <div className="mr-20">
                    <select className="select select-primary w-full max-w-md">
                      <option disabled selected>
                        Select your native language
                      </option>
                      <option>Japanese</option>
                      <option>Korean</option>
                      <option>English</option>
                      <option>Mandarin</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>Patois</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <input
                    type="submit"
                    value="Define Word"
                    className="btn btn-wide btn-primary"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
