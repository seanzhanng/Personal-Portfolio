const About = () => {
  return (
    <section>
      {/* Title Header */}
      <div className="flex justify-center p-2">
        <h1 className="text-white text-3xl font-extrabold text-center">
          About Me!
        </h1>
      </div>

      {/* Three Info Blocks */}
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="w-[48%] bg-gray-800 p-6 rounded-lg text-white">
          <img
            src="/about_me_images/sean.jpg"
            alt="Sean"
            className="w-full object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">A Little About Me</h2>
          <p>
            I'm a high school student at The Woodlands Secondary School and I'm
            passionate about solving real-world problems, pushing my limits, and
            learning new things.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[48%] bg-gray-800 p-6 rounded-lg text-white">
          <img
            src="/about_me_images/beach.jpg"
            alt="Beach"
            className="w-full object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Extracurriculars/Hobbies</h2>
          <p>
            Outside of school, I’m a competitive swimmer, a deck supervisor for
            the City of Mississauga, and a huge fan of Mario Kart.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[48%] bg-gray-800 p-6 rounded-lg text-white">
          <img
            src="/about_me_images/waterloo.jpg"
            alt="UWaterloo"
            className="w-full object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Future Aspirations</h2>
          <p>
            In a few years, I aim to pursue a Bachelor of Software Engineering
            at the University of Waterloo, combining my love for computer
            science and engineering to solve real-world problems.
          </p>
        </div>

        {/* Card 4 */}
        <div className="w-[48%] bg-gray-800 p-6 rounded-lg text-white">
          <img
            src="/about_me_images/mrwilliams.jpg"
            alt="Me and my chemistry teacher"
            className="w-full object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Achievements</h2>
          <p>
            <li></li>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
