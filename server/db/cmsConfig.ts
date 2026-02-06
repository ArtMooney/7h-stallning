export const cmsTables = [
  {
    id: "static_content",
    name: "Static Content",
    viewMode: "list",
    backupRef: null,
  },
];

export const fieldsConfig = {
  static_content: {
    id: { type: "integer", label: "", required: true, hidden: true },
    title: { type: "text", label: "Title", required: true, hidden: false },
    content: {
      type: "json",
      label: "Content",
      required: false,
      hidden: false,
    },
    sortOrder: { type: "integer", label: "", required: true, hidden: true },
    createdAt: { type: "date", label: "", required: true, hidden: true },
    updatedAt: { type: "date", label: "", required: true, hidden: true },
  },
};

export const graphConfig = {};

const getSeoSchema = () => ({
  title: "text",
  description: "textarea",
  ogTitle: "text",
  ogDescription: "textarea",
  ogImage: "fileImg",
  twitterTitle: "text",
  twitterDescription: "textarea",
  twitterImage: "fileImg",
});

export const staticContentTypes = {
  "page - Index": {
    heading: {
      title: "text",
      image: "fileImg",
      imageAlt: "text",
    },
    section: {
      title: "text",
      text: "textarea",
    },
    services: {
      title: "text",
      listTitle1: "text",
      listText1: "textarea",
      image1: "fileImg",
      image1Alt: "text",
      listTitle2: "text",
      listText2: "textarea",
      image2: "fileImg",
      image2Alt: "text",
    },
    cooperation: {
      title: "text",
      text: "textarea",
      imageLeft: "fileImg",
      imageLeftAlt: "text",
      imageRight: "fileImg",
      imageRightAlt: "text",
    },
    whyChooseUs: {
      title: "text",
      text: "textarea",
    },
    contact: {
      title: "text",
      text: "textarea",
      phoneName1: "text",
      phoneNumber1: "text",
      phoneName2: "text",
      phoneNumber2: "text",
      serviceText: "textarea",
      image: "fileImg",
      imageAlt: "text",
    },
    pageSubtext: {
      text: "textarea",
    },
  },
  "Component - Navbar": {
    buttons: {
      contact: "text",
    },
  },
  "Component - CompanyInfo": {
    company: "text",
    address: "text",
    address2: "text",
    phone: "text",
    phone2: "text",
  },
  "SEO page - Index": getSeoSchema(),
};
