const Accordion = ({ items }) => {
  return (
    <div className="accordion accordion-icon accordion-bg-light" id="accordionFaq">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button h6 rounded ${item.expanded ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.expanded}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionFaq"
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "What is Casemanagement?",
      answer: "... Your answer ...",
      expanded: true,
    },
    {
      id: 2,
      question: "How can I help?",
      answer: "... Your answer ...",
      expanded: false,
    },
  ];

  return (
    <section className="pt-0 pt-md-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 col-xl-5">
            {/* Title and button */}
            <h2 className="fs-1">Frequently Asked Questions</h2>
            <p className="mb-0">
              We are answering the most frequent questions. No worries if you do
              not find the exact one. You can find out more by searching or
              continuing by clicking the button below or directly{" "}
              <a href="#" className="text-decoration-underline">
                Contact our supports
              </a>
            </p>
          </div>
          <div className="col-lg-6 ms-xl-auto">
            {/* Accordion START */}
            <div
              className="accordion accordion-icon accordion-bg-light"
              id="accordionFaq"
            >
              <Accordion items={questions} />
            </div>
            {/* Accordion END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
