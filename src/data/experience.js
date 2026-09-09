import airkritOffer from "../assets/offer_letter_disha.pdf";
import labmentixOffer from "../assets/Labmentix_Offer_Letter_Disha_Agrawal.pdf";
import reasonateOffer from "../assets/reasonate-ai-offer.pdf";

export const experience = [
  {
    id: "airkrit",
    company: "Airkrit",
    role: "Data Analytics Internship",
    startedFrom: "June 2026 - Present",
    intro: "Working on real-world data analytics assignments involving credit card and banking datasets — analyzing spending patterns, customer segments, and profitability.",
    learning: "Practical data analysis workflows — from raw transaction data to business insights, using both Python and SAS for the same kind of problem.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SAS Studio", "PROC SQL"],
    assignments: [
      {
        title: "Assignment 1: Credit Banking Data Analysis (Python)",
        details: [
          "Checked customer age validity and credit limit breaches",
          "Computed monthly spend and repayment per customer",
          "Found top 10 highest-paying customers",
          "Analyzed segment-wise and age-group-wise spending",
          "Identified most profitable customer segment",
          "Calculated 2.9% interest on due amounts and monthly bank profit",
        ],
      },
      {
        title: "Assignment 2: Credit Card Transaction Analysis (SAS)",
        details: [
          "Found top 5 cities by spend and % contribution",
          "Identified highest spend month per card type",
          "Tracked cumulative spend milestones (₹10L) per card type",
          "Found city with lowest % spend for Gold card",
          "City-wise highest & lowest expense type",
          "Female % contribution per expense type",
          "Highest month-over-month growth in Jan 2014",
          "Weekend city with highest spend-per-transaction ratio",
          "City reaching 500th transaction fastest",
        ],
      },
    ],
    image: airkritOffer,
  },
  {
    id: "labmentix",
    company: "Labmentix",
    role: "AI/ML Internship",
    startedFrom: "",
    intro: "AI/ML internship focused on building real end-to-end machine learning and AI agent projects — from data pipelines to deployed apps.",
    learning: "End-to-end ML project delivery — data cleaning, model building, evaluation, and deployment — plus building multi-agent AI systems using LLMs.",
    techStack: ["Python", "FastAPI", "Groq API", "ChromaDB", "React", "XGBoost", "Streamlit", "MLflow"],
    assignments: [
      {
        title: "Multi-Agent AI Customer Support System",
        details: [
          "Built with FastAPI backend, Groq API for LLM responses, ChromaDB for retrieval",
          "React frontend for the customer support interface",
        ],
      },
      {
        title: "Flipkart CSAT Score Classification",
        details: [
          "Built a classification notebook to predict customer satisfaction (CSAT) scores",
        ],
      },
      {
        title: "EMIPredict AI",
        details: [
          "ML platform predicting EMI eligibility (classification) and max EMI amount (regression)",
          "MLflow experiment tracking, deployed as a Streamlit app",
        ],
      },
      {
        title: "Tourism Experience Analytics",
        details: [
          "Rating prediction (regression), visit-mode prediction (classification), and attraction recommendations",
        ],
      },
      {
        title: "Shopper Spectrum",
        details: [
          "Customer segmentation and product recommendation using clustering and collaborative filtering",
        ],
      },
    ],
    image: labmentixOffer,
  },
  {
    id: "reasonate-ai",
    company: "Reasonate AI",
    role: "AI Internship",
    startedFrom: "",
    intro: "",
    learning: "",
    techStack: [],
    assignments: [],
    image: reasonateOffer,
  },
];