 export const forms = [
  {
    id: "1",
    title: "Job Application",
    description: "Application form for job ",
    fields: [
      { label: "Name", type: "text", required: true },
      { label: "Age", type: "number", required: true },
      { label: "Position", type: "dropdown", required: true }
    ]
  },
  {
    id: "2",
    title: "Contact Form",
    description: "Get in touch with us",
    fields: [
      { label: "Name", type: "text", required: true },
      { label: "Email", type: "text", required: true },
      { label: "Message", type: "text", required: true }
    ]
  },
  {
    id: "3",
    title: "Feedback Form",
    description: "Share your feedback",
    fields: [
      { label: "Name", type: "text", required: false },
      { label: "Rating", type: "number", required: true },
      { label: "Comments", type: "text", required: false }
    ]
  }
]