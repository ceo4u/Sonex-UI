
import { useState } from "react";
import NavLayout from "@/components/NavLayout";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

const FAQs = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "Is it really free?",
      answer: "Yes, Sonex AI offers a free tier that allows you to generate a limited number of audio clips per month. For unlimited usage and additional features, you can upgrade to one of our premium plans.",
      isOpen: false
    },
    {
      question: "What can I use the generated audio for?",
      answer: "You can use Sonex AI's generated audio for a wide range of purposes including YouTube videos, podcasts, audiobooks, e-learning courses, presentations, advertisements, and more. Our commercial license allows you to use the audio in commercial projects.",
      isOpen: false
    },
    {
      question: "How many voices are available?",
      answer: "Sonex AI currently offers over 50 different voices across multiple languages and accents. We're constantly adding new voices to our library to provide our users with more options.",
      isOpen: false
    },
    {
      question: "How are the audio files stored?",
      answer: "Your generated audio files are stored securely in your account for 30 days, allowing you to download them whenever needed during that period. After 30 days, they are automatically deleted from our servers. You can also delete them manually at any time.",
      isOpen: false
    },
    {
      question: "What file formats are supported?",
      answer: "Sonex AI supports multiple audio file formats including MP3, WAV, OGG, and FLAC. You can choose the format that best suits your needs when generating your audio.",
      isOpen: false
    },
    {
      question: "Can I clone my own voice?",
      answer: "Yes! With our premium plans, you can upload a few minutes of your own voice recordings, and our AI will learn to clone your voice. This feature is perfect for content creators who want to maintain their brand voice but save time on recording.",
      isOpen: false
    },
    {
      question: "How realistic are the voices?",
      answer: "Sonex AI uses cutting-edge artificial intelligence to create ultra-realistic voices that are often indistinguishable from human speech. Our technology can capture subtle nuances, emotions, and natural speech patterns.",
      isOpen: false
    },
    {
      question: "What languages are supported?",
      answer: "Sonex AI currently supports over 20 languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Japanese, Chinese, Korean, and more. We're continually adding support for additional languages.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen };
      }
      return faq;
    }));
  };

  return (
    <NavLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h1>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card mb-4 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-medium text-white">{faq.question}</span>
                {faq.isOpen ? (
                  <ChevronUp className="h-5 w-5 text-neon-blue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {faq.isOpen && (
                <div className="px-6 pb-6 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </NavLayout>
  );
};

export default FAQs;
