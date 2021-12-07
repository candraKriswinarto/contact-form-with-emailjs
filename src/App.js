import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="h-screen">
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 bg-blue-300 lg:h-2/3">
        <div className="flex flex-col justify-center text-center lg:p-40 md:text-left">
          <p className="uppercase font-medium opacity-40 text-gray-500">Contact Us</p>
          <h1 className="lg:text-6xl md:text-5xl text-4xl">Let's talk about you</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
