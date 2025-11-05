import FormNom from "./_components/FormNom";
import Haiku from "./_components/Haiku";
import { HaikuProvider } from "./_context/haikuContext";


const HomePage = () => {

  return (
    <main className="retour flex flex-col items-center justify-center gap-2 py-5">
      <h1>Haiku c'est la vie</h1>
      <div >
        {/* <HaikuProvider> */}
        <FormNom />

        {/* </HaikuProvider> */}

      </div>
    </main>


  );
};
export default HomePage;
