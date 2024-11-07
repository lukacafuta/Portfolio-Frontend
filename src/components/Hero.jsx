export default function Hero() {
  return (
    <section className="flex flex-row justify-between mb-">
        <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-extrabold pb-4">
                Sali, I'm <span className="block pt-4">Luka Cafuta</span>
            </h1>
            <h2 className="text-3xl font-semibold pb-12">Full Stack Developer from Switzerland.</h2>
            <div className="flex flex-row gap-4">
                <a
                    href="https://www.linkedin.com/in/luka-cafuta"
                    target="_blank"
                    rel="noopener noreferrer" // This is a security measure to prevent malicious websites from accessing your data
                    className="flex flex-row items-center justify-center bg-custom-linkedin-burgundy w-32 h-10 rounded-lg gap-2 text-md cursor-pointer hover:scale-110"
                >
                    <img src="/linkedin-logo.svg" alt="LinkedIn button"/>
                    <div className="font-semibold font-poppins">
                        LinkedIn
                    </div>
                </a>
                <a
                    href="https://github.com/lukacafuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center bg-custom-github-dark-green w-32 h-10 rounded-lg gap-2 text-md cursor-pointer hover:scale-110"
                >
                    <img src="/github-logo.svg" alt="GitHub button"/>
                    <div className="font-semibold font-poppins">
                        GitHub
                    </div>
                </a>
            </div>
        </div>
        <div>
        <img src="/profile-photo.svg" alt="Profile photo"/>
        </div>
    </section>
  );
}