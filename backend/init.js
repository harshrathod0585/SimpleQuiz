const mongoose = require('mongoose');
const quiz = require("./models/quizschema.js");
main()
.then(()=>{console.log("Connection Successful")})
.catch(err=>{console.log(err)});
async function main() { 
  await mongoose.connect("mongodb://127.0.0.1:27017/quiz");
}

const quizes =[
  {
    "questions": "Which country became the first to fully vaccinate its population against COVID-19 in 2024?",
    "optionA": "Israel",
    "optionB": "United States",
    "optionC": "United Kingdom",
    "optionD": "Chile",
    "answer": "Israel"
  },
  {
    "questions": "What is the name of the Mars rover launched by NASA in 2024?",
    "optionA": "Perseverance",
    "optionB": "Curiosity",
    "optionC": "Spirit",
    "optionD": "Insight",
    "answer": "Perseverance"
  },
  {
    "questions": "Which country launched the world's first 6G satellite in 2024?",
    "optionA": "China",
    "optionB": "United States",
    "optionC": "Russia",
    "optionD": "India",
    "answer": "China"
  },
  {
    "questions": "Who became the first woman to lead the European Central Bank in 2024?",
    "optionA": "Christine Lagarde",
    "optionB": "Ursula von der Leyen",
    "optionC": "Mairead McGuinness",
    "optionD": "Sylvie Goulard",
    "answer": "Christine Lagarde"
  },
  {
    "questions": "What major global event took place in 2024 to discuss climate change?",
    "optionA": "Paris Climate Agreement",
    "optionB": "COP29 Conference",
    "optionC": "Global Climate Action Summit",
    "optionD": "UN Climate Change Conference (COP29)",
    "answer": "UN Climate Change Conference (COP29)"
  },
  {
    "questions": "Which country became the first to offer universal basic income to its citizens in 2024?",
    "optionA": "Finland",
    "optionB": "Canada",
    "optionC": "Spain",
    "optionD": "United States",
    "answer": "Finland"
  },
  {
    "questions": "Which tech giant announced the launch of its new AI-driven operating system in 2024?",
    "optionA": "Apple",
    "optionB": "Microsoft",
    "optionC": "Google",
    "optionD": "Amazon",
    "answer": "Google"
  },
  {
    "questions": "Which country was the first to successfully launch a commercial space station in 2024?",
    "optionA": "United States",
    "optionB": "Russia",
    "optionC": "China",
    "optionD": "India",
    "answer": "China"
  },
  {
    "questions": "Which popular streaming service launched its first virtual reality-based movie in 2024?",
    "optionA": "Netflix",
    "optionB": "Disney+",
    "optionC": "Amazon Prime Video",
    "optionD": "Apple TV+",
    "answer": "Netflix"
  },
  {
    "questions": "What global issue became the focus of the G20 summit in 2024?",
    "optionA": "Global warming",
    "optionB": "Global economic recovery",
    "optionC": "Digital privacy",
    "optionD": "Global vaccination programs",
    "answer": "Global economic recovery"
  }
]


quiz.insertMany(quizes);
