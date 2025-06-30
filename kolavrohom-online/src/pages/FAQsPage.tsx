import React from 'react';

const FAQsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h1>
        
        <div className="bg-gray-200 rounded-lg p-8 shadow-sm">
          <div className="space-y-8">
            {/* First Question */}
            <div>
              <h2 className="text-xl font-medium text-gray-700 mb-3">
                Why doesn't Reb Avrohom teach the commentary of Rashi?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Reb Avrohom was super thorough when teaching Gemara - he didn't skip a single word of Rashi's commentary! It's all woven together with his teachings of the Gemara. Many times when he taught the Rashi separately, the recorder was off.
              </p>
            </div>

            {/* Second Question */}
            <div>
              <h2 className="text-xl font-medium text-gray-700 mb-3">
                Are the recordings available for purchase?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Yes, the entire Shas (Talmud) is available for purchase on a USB. Please contact us via{' '}
                <a 
                  href="mailto:kolavrohom@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  email
                </a>
                {' '}or{' '}
                <a 
                  href="https://wa.me/17188776485" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                {' '}to arrange.
              </p>
            </div>

            {/* Third Question */}
            <div>
              <h2 className="text-xl font-medium text-gray-700 mb-3">
                Where is Reb Avrohom buried?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Reb Avrohom is interred in the Old Montefiore Cemetery in Queens, NY. You can find directions to his Kever{' '}
                <a 
                  href="https://www.google.com/maps/place/40%C2%B041'07.3%22N+73%C2%B044'10.1%22W/@40.6856243,-73.7373653,18z/data=!4m4!3m3!8m2!3d40.6853611!4d-73.7361389?entry=ttu" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>
              </p>
            </div>

            {/* Fourth Question */}
            <div>
              <h2 className="text-xl font-medium text-gray-700 mb-3">
                Is Kol Avrohom available on other channels?
              </h2>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.kolavrohom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTM1IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNNjguMzk0IDE5LjIwN0w2MS44NzQgMjQuOTU3TDU1LjM1NCAxOS4yMDdMNjEuODc0IDEzLjQ1N0w2OC4zOTQgMTkuMjA3WiIgZmlsbD0iIzAwRjQxNiIvPgo8cGF0aCBkPSJNNzQuMTQ0IDE5LjIwN0w2OC4zOTQgMTkuMjA3TDYxLjg3NCAyNC45NTdMNjguMzk0IDE5LjIwN0w3NC4xNDQgMTkuMjA3WiIgZmlsbD0iI0ZGNDEwMCIvPgo8cGF0aCBkPSJNNjEuODc0IDI0Ljk1N0w1NS4zNTQgMTkuMjA3TDQ5LjYwNCAxOS4yMDdMNTUuMzU0IDE5LjIwN0w2MS44NzQgMjQuOTU3WiIgZmlsbD0iI0ZGRkEwMCIvPgo8cGF0aCBkPSJNNjEuODc0IDEzLjQ1N0w1NS4zNTQgMTkuMjA3TDQ5LjYwNCAxOS4yMDdMNTUuMzU0IDE5LjIwN0w2MS44NzQgMTMuNDU3WiIgZmlsbD0iIzAwRDBGRiIvPgo8dGV4dCB4PSIxNSIgeT0iMTYiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjEwIiBmb250LWZhbWlseT0iQXJpYWwiPkdFVCBJVCBPTjwvdGV4dD4KPHR5eHQgeD0iMTUiIHk9IjI4IiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+R29vZ2xlIFBsYXk8L3RleHQ+Cjx0ZXh0IHg9IjkwIiB5PSIyNCIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iOCIgZm9udC1mYW1pbHk9IkFyaWFsIj5Db21pbmcgU29vbiBvbiBHb29nbGUgUGxheTwvdGV4dD4KPC9zdmc+"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>

                <a 
                  href="https://apps.apple.com/no/app/kol-avrohom-daf-yomi/id6479884701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTM1IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMjUuMjUgMjAuNUMzMC43NSAyMC41IDM1LjI1IDE2IDM1LjI1IDEwLjVDMzUuMjUgNSAzMC43NSAwLjUgMjUuMjUgMC41QzE5Ljc1IDAuNSAxNS4yNSA1IDE1LjI1IDEwLjVDMTUuMjUgMTYgMTkuNzUgMjAuNSAyNS4yNSAyMC41WiIgZmlsbD0id2hpdGUiLz4KPHR5eHQgeD0iNDUiIHk9IjE2IiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxMCIgZm9udC1mYW1pbHk9IkFyaWFsIj5Eb3dubG9hZCBvbiB0aGU8L3RleHQ+Cjx0ZXh0IHg9IjQ1IiB5PSIyOCIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iQXJpYWwiPkFwcCBTdG9yZTwvdGV4dD4KPC9zdmc+"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>

                <a 
                  href="https://open.spotify.com/show/2ITnbFkEaVd7rh5mJSzxZX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTM1IDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTM1IiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iIzFEQjk1NCIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxMCIgZmlsbD0iYmxhY2siLz4KPHN0cm9rZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTBcIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPHR5eHQgeD0iNDAiIHk9IjE2IiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxMCIgZm9udC1mYW1pbHk9IkFyaWFsIj5MSVNURU4gT048L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSIyOCIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0iQXJpYWwiPlNwb3RpZnk8L3RleHQ+Cjxwb2x5Z29uIHBvaW50cz0iMTgsOCAxOCwzMiAzMCwyMCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+"
                    alt="Listen on Spotify"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage; 