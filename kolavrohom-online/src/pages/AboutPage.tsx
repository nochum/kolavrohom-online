import React, { useState } from 'react';

const AboutPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-a.jpg',
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-b.jpg',
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-c.jpg',
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-d.jpg',
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-e.jpg',
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-f.jpg',
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-g.jpg',
    'https://dafcvwmmdhi2y.cloudfront.net/images/ka-h.jpg'
  ];

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex: number) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex: number) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-8">About Us</h1>
      </div>

      {/* Image Carousel */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-80 h-60 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`Rabbi Karp ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-md transition-all"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow-md transition-all"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-gray-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Biography Text */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-yellow-50 rounded-lg p-8 shadow-sm border border-yellow-100">
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Rabbi Karp was born on the 15th of Teves, 5680 (1920) in Frampol, Poland to Yaakov Boruch and Rochel, Trisker Chassidim. At the age of ten, his thirst to learn Torah led him to enroll as a student in the renowned Yeshiva in Navardok. So great was his attachment to his studies that he chose to celebrate his Bar Mitzvah in the Yeshiva rather than return home.
            </p>
            
            <p>
              After a number of years of intense and diligent study, he continued his learning in the Yeshiva in Kletzk. Upon the outbreak of World War II, he tried to flee to the Far East but was captured by the Russian Army and exiled to Siberia. In Siberia, despite the total lack of kosher food, he would not allow non-kosher food to pass his lips. Without proper nutrition his health began to fail. Lacking any proper medication, the doctors gave up on his case as hopeless. At the last minute, a local Jew took over his care and obtained for him bread and other kosher food staples. Slowly, he recovered.
            </p>
            
            <p>
              When the war ended, he eventually found his way to Paris, France. Once again, he devoted himself to learning Torah day and night. During those years in Paris he was introduced to Chassidus.
            </p>
            
            <p>
              In 5711 (1950) he married Rivka Slavin A"H and in 5712 moved to Montreal, Canada. There his qualities were quickly recognized and he was appointed Rosh Mesivta in the Mesivta Reishis Chochmah. In addition to his erudite teaching, he was also extraordinarily successful in imbuing his students with Chassidus and Yiras Shomayim. The fact that his students from all those years ago continued to visit their "Rebbi" up to the time of his passing is a witness to his enduring bond with his Talmidim and his unforgettable effect on them.
            </p>
            
            <p>
              In 5727 (1967), he began giving recorded Shiurim in Daf Yomi in the Lubavitcher Yeshiva in Montreal. The library of his Shiurim comprises well over 2,500 audio cassettes. In his 30 years of teaching, he merited to complete the study of the entire Shas four times and was known as a "Boki B'Shas". With his marvelous ability to elucidate even the most difficult of concepts and with remarkable breadth of knowledge these Shiurim became so well-known that they attracted tens of participants each night from all walks of life. Tapes of those Shiurim were disseminated in the thousands. To this day, thousands of people continue to learn with the aid of "Reb Avrohom".
            </p>
            
            <p>
              Rabbi Karp's entire life was Torah. Nights, too, were for learning Torah, not sleeping. Indeed, he would be awake the entire Thursday night learning. In his last years he became ill and it was difficult for him to go to Shul. Nevertheless, he would not forgo the Daf Yomi Shiur, giving it instead in his house. His influence extended further than his learning; many people would come to "Reb Avrohom" to receive the benefit of his wise and kind advice. Of him our sages say: "Whoever occupies himself with [the study of] the Torah for its own sake... people derive from him the benefit of counsel and wisdom, insight and strength" (Avos 5:1).
            </p>
            
            <p>
              Rav Avrohom Karp ZT"L passed away on the 19th of Elul, 5758. This website is a tribute to the extraordinary legacy of Reb Avrohom and his wife Rivka Karp, whose work continuously inspires and educates people to this day.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage; 