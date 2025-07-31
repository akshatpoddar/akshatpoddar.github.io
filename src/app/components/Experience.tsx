import fs from 'fs';
import path from 'path';

async function getExperience() {
    const filePath = path.join(process.cwd(), 'src/app', 'data', 'experience.json');
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export default async function Experience() {
    const experience = await getExperience();

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Experience
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {experience.map((exp: any, idx: number) => (
                        <div key={idx} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                                        {exp.role}
                                    </h3>
                                    <p className="text-xl text-blue-600 font-medium">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="text-gray-600 font-medium mt-2 md:mt-0">
                                    {exp.duration}
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {exp.bullets.map((bullet: string, bulletIdx: number) => (
                                    <li key={bulletIdx} className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1">•</span>
                                        <span className="text-gray-700 leading-relaxed">
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 