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
                    src="https://dafcvwmmdhi2y.cloudfront.net/images/google-play-badge2.png"
                    alt="Get it on Google Play"
                    style={{ height: '30px', width: 'auto' }}
                  />
                </a>

                <a 
                  href="https://apps.apple.com/no/app/kol-avrohom-daf-yomi/id6479884701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="https://dafcvwmmdhi2y.cloudfront.net/images/apple-app-store.png"
                    alt="Download on the App Store"
                    style={{ height: '30px', width: 'auto' }}
                  />
                </a>

                <a 
                  href="https://open.spotify.com/show/2ITnbFkEaVd7rh5mJSzxZX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src="https://dafcvwmmdhi2y.cloudfront.net/images/spotify-badge.png"
                    alt="Listen on Spotify"
                    style={{ height: '30px', width: 'auto' }}
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