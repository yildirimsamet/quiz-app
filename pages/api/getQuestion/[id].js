const questionsArray = [
  {
    id: "1",
    question: "What is the capital city of Turkey ?",
    answers: [
      { text: "Izmir", isCorrect: false },
      { text: "Ankara", isCorrect: true },
      { text: "Istanbul", isCorrect: false },
      { text: "Denizli", isCorrect: false },
    ],
  },
  {
    id: "2",
    question: "Who is the founder of kriptomatik.org ?",
    answers: [
      { text: "Samet Yıldırım", isCorrect: true },
      { text: "Jeff Bezos", isCorrect: false },
      { text: "Elon Musk", isCorrect: false },
      { text: "Bill Gates", isCorrect: false },
    ],
  },
  {
    id: "3",
    question: "Which rapper Samet likes more",
    answers: [
      { text: "6ix9ine", isCorrect: false },
      { text: "Tupac", isCorrect: false },
      { text: "Tyga", isCorrect: false },
      { text: "21 Savage", isCorrect: true },
    ],
  },
  {
    id: "4",
    question: "When was Samet born ?",
    answers: [
      { text: "1993", isCorrect: false },
      { text: "1994", isCorrect: false },
      { text: "1995", isCorrect: true },
      { text: "1996", isCorrect: false },
    ],
  },
];
export default (req, res) => {
  const { id } = req.query;
  const question = questionsArray.find((q) => q.id === id);

  res.status(200).json(question);
};
