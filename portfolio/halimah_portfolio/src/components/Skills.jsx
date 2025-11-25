import { FaCode, FaDatabase, FaRobot, FaCloud } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        {/* Full-Stack Development */}
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-3">
            <FaCode className="text-blue-500 mr-2" /> Full-Stack Development
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Frontend: React, Javascript, Tailwind CSS, Responsive UI/UX</li>
            <li>Backend: Node.js, Django, FastAPI, REST & GraphQL APIs</li>
            <li>Databases: PostgreSQL, MySQL, MongoDB</li>
            <li>DevOps: Docker, CI/CD, AWS, Azure, GCP</li>
          </ul>
        </div>

        {/* AI & Machine Learning */}
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-3">
            <FaRobot className="text-green-500 mr-2" /> AI & Machine Learning
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Python, TensorFlow, PyTorch, Scikit‑Learn, Hugging Face</li>
            <li>Model training, fine‑tuning, deployment</li>
            <li>MLOps: monitoring, retraining pipelines</li>
            <li>Data Engineering: ETL, Spark, Kafka</li>
          </ul>
        </div>

        {/* Cloud & Integration */}
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-3">
            <FaCloud className="text-purple-500 mr-2" /> Cloud & Integration
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Applied AI: NLP, Computer Vision, Recommendation Systems</li>
            <li>Cloud Deployment: AWS, Azure, GCP</li>
            <li>Edge AI: Mobile & IoT integration</li>
          </ul>
        </div>

        {/* Databases */}
        <div>
          <h3 className="flex items-center text-lg font-semibold mb-3">
            <FaDatabase className="text-red-500 mr-2" /> Data Management
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>SQL & NoSQL databases</li>
            <li>Data pipelines & preprocessing</li>
            <li>Performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}