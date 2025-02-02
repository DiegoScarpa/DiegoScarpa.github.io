import ProjectCard from '@/components/project-card';

export const metadata = {
    title: 'Portfolio - Projects',
    description: 'The projects page of my portfolio.',
};

export default async function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <main className="flex flex-col items-start flex-grow px-4 sm:px-6 lg:px-24 py-4">
                <div className="flex flex-col justify-start items-start gap-6 mb-4 max-w-full lg:max-w-[464px]">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">My Projects</h1>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">
                        A collection of projects showcasing my work and creativity. Each project represents my skills in technology and design.
                    </p>
                </div>

                {/* Responsive container for project cards */}
                <div className="flex flex-col items-start gap-4 w-full">
                    {/* Row 1 */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4 w-full">
                        <ProjectCard
                            company="Portfolio"
                            description="Showcasing personal projects and skills in web development and design."
                            link="https://company1.com"
                        />
                        <ProjectCard
                            company="Chamber"
                            description="Driving local business growth through modern, user-friendly web solutions."
                            link="https://silva-melyssa.github.io/wdd230/chamber/index.html"
                        />
                        <ProjectCard
                            company="Rafting"
                            description="Creating adventure-driven platforms for outdoor enthusiasts and sports lovers."
                            link="https://silva-melyssa.github.io/wdd130/wwr/index.html"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4 w-full">
                        <ProjectCard
                            company="Brazilian beauties"
                            description="Building website to show the beautiful places in Brazil and it culture."
                            link="https://silva-melyssa.github.io/wdd130/brazilianbeauties/index.html"
                        />
                        <ProjectCard
                            company="Scoots rental"
                            description="Building user-friendly rental platforms for easy scooter access and transportation."
                            link="https://silva-melyssa.github.io/wdd230/rentals.html"
                        />
                        <ProjectCard
                            company="Company 6"
                            description="Designing user-friendly mobile applications."
                            link="https://company6.com"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
