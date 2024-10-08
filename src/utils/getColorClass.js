const getColorClass = (tech) => {
  switch (tech) {
    case "#JavaScript":
      return "javascript";
    case "#TypeScript":
      return "typescript";
    case "#HTML":
      return "html";
    case "#CSS":
      return "css";
    case "#Git":
      return "git";
    case "#Node.js":
      return "nodejs";
    case "#Express.js":
      return "expressjs";
    case "#MongoDB":
      return "mongodb";
    case "#PostgreSQL":
      return "postgresql";
    case "#Next.js":
      return "nextjs";
    case "#Firebase":
      return "firebase";
    case "#Jest":
      return "jest";
    case "#CI/CD":
      return "cicd";
    case "#AdobeXD":
      return "adobe-xd";
    case "#React.js":
      return "reactjs";
    case "#JWT":
      return "jwt";
    case "#Strapi":
      return "strapi";
    case "#MUI":
      return "mui";
  case "#Laravel":
      return "laravel";
  case "#PHP":
      return "php";
        case "#Bootstrap":
      return "bootstrap";
    case "#TailwindCSS":
      return "tailwindcss";
      case "#Java":
        return "java";
    case "#J2EE":
      return "j2ee";
    case "#Servlets":
      return "servlets";
      case "#MySQL":
        return "mysql";
    default:
      return "";
  }
};

export default getColorClass;
