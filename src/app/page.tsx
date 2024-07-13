import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Say Goodbye to Language Barriers
            </h1>
            <p className="py-6">
              Effortlessly translate and understand words and phrases in
              real-time. Whether it's slang, colloquial speech, or formal
              writing, our AI-powered tool bridges the gap between languages,
              ensuring clear and accurate communication.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            title="spiderman2"
          />
          <div>
            <h1 className="text-5xl font-bold">
              200+ Languages Supported for Accurate Translation and Learning
            </h1>
            <p className="py-6">
              Experience seamless translations and detailed explanations in over
              200 languages. Our platform caters to your linguistic needs,
              providing precise translations and cultural context to enhance
              your understanding and learning journey.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            title="spiderman2"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Your Ultimate Language Companion
            </h1>
            <p className="py-6">
              Empower your language learning with our comprehensive tool. From
              translating and breaking down complex sentences to providing
              native language explanations, we support solo learners and
              multilingual enthusiasts alike in mastering any language.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
