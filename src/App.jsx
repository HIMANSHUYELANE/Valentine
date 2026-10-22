import { useEffect, useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [yesButton, setYesButton] = useState(false);
  const [noButton, setNoButton] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [showNo , setShowNo] = useState(true)

  useEffect(() => {
  if (noCount > 4) {
    setShowNo(false);
  }
}, [noCount]);
  console.log(noCount);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-red-400 to-pink-600">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
        {!showMessage && (
          <>
            <h1 className="text-4xl text-shadow-lg shadow-pink-900 italic font-bold text-white mb-4">
              To the most beautiful part of my life 💖
            </h1>

            <p className="text-xl  text-red-600 font-semibold font-mono mt-10 mb-5">
              Will You Be My Valentine <span className="text-4xl">💕</span>
            </p>
          </>
        )}

        {showMessage && (
          <div className="">
            <img
              className="h-30 mx-auto rounded-full"
              src="https://i.pinimg.com/originals/47/12/69/4712697fbcc8206052be88bb457e6d6b.gif"
              alt="hima"
            />
          </div>
        )}

        {/* Heart */}
        <div className="text-6xl text-shadow-lg cursor-pointer animate-pulse mb-6">❤️</div>

        {/*convo message*/}
        {yesButton || !showMessage && (
          <div className="m-4">
            {noCount === 0 ? (
              <p> </p>
            ) : noCount === 1 ? (
              <div>
              <img className="mx-auto" src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyaHBra2lobGNvcGRmbWVoaHUzejhkem4yYjdyMDRzYW1ub2U1ZHU0YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RXKCMLmch5W2Q/200w.gif" alt="" />
              <p className="font-bold text-white ">Let’s not rush it.</p>
              </div>
            ) : noCount === 2 ? (
              <div>
              <img className="mx-auto" src="https://media.tenor.com/tOaMhQnD-xcAAAAj/thinking-sad.gif" alt="" />
              <p className="font-bold text-pink-500">Wait—think once 🤔</p>
              </div>
            ) : noCount === 3 ? (
              <div>
              <img className="mx-auto h-32" src="https://media.tenor.com/3JFVS6XTr98AAAAj/cover-face-fred-pye.gif" alt="" />
              <p className="font-bold text-pink-600">No are You sure?</p>
              </div>
            ) : noCount === 4 ? (
              <div>
              <img className="mx-auto h-32" src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyY3hpbndoYmRwZms2dHc4d3B3N2Q5NzF0d2d0MnVvdmRjdjZweTBseSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sLkIthus9lEwoe7PRx/200w.gif" alt="" />
              <p className="font-bold text-pink-700">Give it a Chance</p>
              </div>
            ): (
              <div>
              <img className="mx-auto" src="https://media.tenor.com/VA8IoiRy60gAAAAM/patrick-spongebob.gif" alt="" />
              <p className="font-serif font-semibold">No option is Not any More 😒 <br></br>
                <span className="text-red-700 font-mono font-semibold text-xl">just say yes Already</span></p>
              </div>
            )}
          </div>
        ) }

        {/*YES NO Button*/}
        {!showMessage && !yesButton && (
          <div>
            <button
              className="px-3 font-semibold text-white hover:border-pink-500 border-2 border-white mx-5 rounded-md bg-pink-400"
              onClick={() => setYesButton(true)}
            >
              Yes
            </button>
             { showNo && (
           <button
              onClick={() => setNoCount(noCount + 1)}
              className="px-3 font-semibold text-white hover:border-pink-500 border-2 border-white mx-5 rounded-md bg-pink-400">
              No
            </button>
        )}
          </div>
        )}
       

        {yesButton && !showMessage && (
          <button
            onClick={() => setShowMessage(true)}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg transition transform hover:scale-105"
          >
            Tap to see my heart <span className="animate-spin">💌</span>
          </button>
        )}

        {showMessage && (
          <div className="mt-6 bg-white/30 p-5 rounded-2xl text-white">
            <h2 className="text-2xl font-semibold mb-2">My Love 💞</h2>
            <p className="text-lg leading-relaxed italic">
              You make my world brighter, my heart warmer, and my life happier.
              I’m grateful for you every single day.
            </p>
            <p className="mt-3 text-xl font-bold">I Love You Forever ❤️</p>
          </div>
        )}
      </div>
    </div>
  );
}
