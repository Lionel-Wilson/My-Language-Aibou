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
          marginTop: "2em",
        }}
      >
        <h1 className="text-4xl">Language Analysis Hub</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2em",
        }}
      >
        <div role="tablist" className="tabs tabs-lifted tabs-lg w-3/4">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab "
            aria-label="Phrase"
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
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Word"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
