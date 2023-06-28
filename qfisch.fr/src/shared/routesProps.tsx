import { DetailsProps } from "../pages/Details";

export const epitaProps: DetailsProps = {
  title: "M.Sc. in Computer Science",
  description: [
    "Engineering course specialising in Computer Science with the development of physics knowledge, mathematics, algorithms and fundamentals",
    "AI and Big Data specialisation (Machine Learning, NLP, Computer Vision)",
    "Secretary of blockchain and finance association (LaCity) and organizer of competitions and conferences with partners"
  ],
  image: "epita.png",
  company: "EPITA",
  category: "/* Education */",
  grade: true,
  loc: "Paris, France",
  dateStart: "September 2019",
  dateEnd: "July 2024",
  website: "https://epita.fr/en",
};

export const ctuProps: DetailsProps = {
  title: "Abroad semester in Computer Science",
  description: ["Faculty of Computer Science with courses in artificial intelligence, database, linear algebra, computer architecture and object-oriented programming"],
  image: "ctu.png",
  company: "Czech Technical University Prague",
  category: "/* Education */",
  grade: true,
  loc: "Prague, Czech Republic",
  dateStart: "February 2021",
  dateEnd: "June 2021",
  website: "https://fit.cvut.cz/en",
};

export const alien6SoftwareEngineerProps: DetailsProps = {
  title: "Software Engineer",
  description: ["Part-time permanent contract", "Creation of a web platform to generate 100% blockchain based badges for all types of certifications"],
  image: "alien6.png",
  company: "Alien6",
  category: "// Work",
  grade: false,
  loc: "Remote",
  dateStart: "February 2023",
  dateEnd: "Present",
  skills: [["React.js", "blue"], ["Java", "red"], ["Blockchain", "green"], ["Solidity", "green"]],
  website: "https://alien6.com",
};

export const xbtoProps: DetailsProps = {
  title: "Data Engineering Intern",
  description: [
    "Engineered a market data pipeline for live and historical data ingestion of 11,500 crypto instruments using Kafka, Scala, Spark and AWS",
    "Worked with the Quant Research team on market data database construction for 10+ indicators",
    "Completed a real time data monitoring + risk monitoring ($20M) dashboards using Grafana"
  ],
  image: "xbto.svg",
  company: "XBTO",
  category: "// Work",
  grade: false,
  loc: "New York City, USA",
  dateStart: "August 2022",
  dateEnd: "January 2023",
  skills: [["Python", "yellow"], ["Scala", "purple"], ["Spark", "purple"], ["Kafka", "purple"], ["AWS", "orange"], ["Finance", "pink"]],
  website: "https://xbto.com",
};

export const amanuProps: DetailsProps = {
  title: "StartUp Co-founder",
  description: [
    "Co-creation of a StartUp with 2 classmates",
    "Built a solution to digitalise physical art in NFT, link a physical object to an NFT in 5 minutes time",
    "Implemented Solidity smart contracts and solutions in React.js"
  ],
  image: "PFP.jpeg",
  company: "Amanu",
  category: "// Work",
  grade: false,
  loc: "Paris, France",
  dateStart: "January 2022",
  dateEnd: "June 2023",
  skills: [["React.js", "blue"], ["Blockchain", "green"], ["Solidity", "green"], ["NFT", "green"], ["Business creation", "pink"]],
};

export const alien6ProjectManagerSolidityDevProps: DetailsProps = {
  title: "Project Manager & Solidity Developer",
  description: [
    "Part-time permanent contract",
    "Managed and code a 6 month project for the creation of a React.js DApp",
    "Structured an ICO prototype to raise 100k€ and designed smart contracts with Solidity"
  ],
  image: "alien6.png",
  company: "Alien6",
  category: "// Work",
  grade: false,
  loc: "Remote",
  dateStart: "October 2021",
  dateEnd: "July 2022",
  skills: [["React.js", "blue"], ["Blockchain", "green"], ["Solidity", "green"], ["Tokenemics", "pink"]],
  website: "https://alien6.com",
};

export const pfeeTransformersLLMProps: DetailsProps = {
  title: "Transformers + LLM model for tickets classification & fixing time prediction",
  description: [
    "The goal of this project is to classify tickets and predict the time to fix them using Transformers and LLM model",
    "Regarding classification, we will use a transformer model to classify tickets into categories. These categories will be of type: bug, feature, documentation, basic question, etc.",
    "The classification will be thought of in two separate steps: first, classifying the ticket as soon as it comes through the system, and then, at the end of the month when an employee makes sure that each ticket is in the right category and are solved. Re-classifying at the end of the month will be done with more information than the first classification, since there will be comments, more details, etc. Thus, it will allow a more accurate classification",
    "Secondly, we will work on a model to predict the time to fix a ticket. We are not sure yet of the technique we will use, since this part will come after the classification process is done",
    "This project is done in collaboration with Cloud Temple, a company that provides cloud services to its customers, focusing on cybersecurity. Their many clients generate a lot of tickets, and they want to automate the classification and prediction of the time to fix them, allowing them to reduce the SLA (Service Level Agreement) and improve their customer satisfaction",
    "The project is currently in the early stages of development"
  ],
  image: "cloud-temple.jpg",
  context: "End-of-study project x Cloud Temple • Ongoing",
  category: "# Projects",
  grade: false,
  skills: [["Python", "yellow"], ["Tensorflow", "orange"], ["Numpy", "orange"], ["Pandas", "orange"], ["Scikit-Learn", "orange"], ["Transformers", "red"], ["Machine Learning", "red"]],
};

export const nlpProps: DetailsProps = {
  title: "Various NLP tasks",
  description: [
    "I have worked through diverse NLP tasks from basic Naive Bayes to Transformers models. In total, I have produced, with two other classmates, 7 labs on NLP tasks that I will detail below. You can find the code on my GitHub linked below",
    "1. The first lab consists of implementating a Naive Bayes Classifier for the task of sentiment analysis. The dataset is the IMDB dataset, as it will be for a lot of the following labs. We implemented our own Naive Bayes Classifier and compared it to the one from Scikit-Learn. Finally, we improved them by using lemmatization and stemming on the dataset",
    "2. The second lab consists of implementing a Logistic Regression Classifier for the task of sentiment analysis (same dataset). We implemented our own Logistic Regression Classifier using PyTorch and compared it to the one from Scikit-Learn. We used 3 different ways to generate the features: Pandas, vectorized Numpy arrays and PySpark",
    "3. One again we worked on a classification task on the IMDB dataset. This time, we used FastText and GloVe embeddings to generate the features.",
    "4. We implemented our own RNN (Recurrent Neural Network) for the task of sentiment analysis. We used the IMDB dataset and compared our model to another one built using PyTorch. Also, we compared the PyTorch RNN to a PyTorch LSTM (Long Short-Term Memory) one and a BiLSTM (Bidirectional Long Short-Term Memory) one",
    "5. The fifth lab was about following a PyTorch tutorial to implement a Transformer model to translate English to German. We used the Multi30k dataset. To compute the accuracy of our model, we used the BLEU score",
    "6. We used transfer learning with the DistilBERT model, a smaller version of BERT, and fine-tune it on the IMDB dataset to perform sentiment analysis",
    "7. The last lab was more theorical and oriented towards model evaluation and data annotation. We used Roberta on the 'tweet_eval/offensive' dataset."
  ],
  image: "nlp.png",
  context: "School micro-projects",
  category: "# Projects",
  grade: false,
  skills: [["Python", "yellow"], ["Tensorflow", "orange"], ["Numpy", "orange"], ["Pandas", "orange"], ["Scikit-Learn", "orange"], ["Transformers", "red"], ["Machine Learning", "red"]],
  github: "https://github.com/QuentinFISCH/nlp1-labs"
};

export const dataEngineeringProps: DetailsProps = {
  title: "Data pipeline for live drone data processing",
  description: [
    "TODO (work in progress, sorry)"
  ],
  image: "spark.png",
  context: "School project",
  category: "# Projects",
  grade: false,
  skills: [["Scala", "purple"], ["Spark", "purple"], ["Kafka", "purple"], ["AWS", "yellow"], ["Docker", "blue"], ["Grafana", "orange"]],
};

export const recommenderSystemProps: DetailsProps = {
  title: "Recommender system for food delivery app",
  description: [
    "TODO (work in progress, sorry)"
  ],
  image: "tf.png",
  context: "School project",
  category: "# Projects",
  grade: false,
  skills: [["Python", "yellow"], ["Tensorflow", "orange"], ["Numpy", "orange"], ["Pandas", "orange"], ["PySpark", "purple"]],
  github: "https://github.com/QuentinFISCH/food-delivery-recommender-system"
};

export const tradingBotCompetitionProps: DetailsProps = {
  title: "Trading bot competition - 2nd place out of 100+ teams",
  description: [
    "TODO (work in progress, sorry)"
  ],
  image: "imc.png",
  context: "Competition by EPITA x IMC Trading",
  category: "# Projects",
  grade: false,
  skills: [["Python", "yellow"], ["Trading", "blue"], ["Finance", "pink"]],
};

export const sudokuSolverProps: DetailsProps = {
  title: "Sudoku solver (simulated annealing method)",
  description: [
    "TODO (work in progress, sorry)"
  ],
  image: "csharp.png",
  context: "School project",
  category: "# Projects",
  grade: false,
  skills: [["C#", "green"], ["Constraint programming", "blue"]],
  github: "https://github.com/theo88400/2023-EPITA-SCIA-PPC-Sudoku-NLP"
};