exports.getAll = () => {
  const stacks = {
    cSharp: { label: "C#", color: "#202030" },
    azureSQL: { label: "Azure SQL", color: "#6EB4D1" },
    gatsby: { label: "Gatsby", color: "#2C2A8D" },
    powerBI: { label: "Power BI", color: "#F7B538" },
    sqlServer: { label: "SQL Server", color: "#18314F" },
    strapi: { label: "Strapi", color: "#384E77" },
    cloudinary: { label: "Cloudinary", color: "#CC2936" },
  }

  const {
    cSharp,
    azureSQL,
    gatsby,
    powerBI,
    sqlServer,
    strapi,
    cloudinary,
  } = stacks
  return [
    {
      title: "ATTENDANCE INFORMATION SYSTEM FOR INTERNATIONAL SYMPOSIUM 2019",
      excerpt:
        "Specialized native windows application built for International Symposium OISAA 2019 Johor Bahru Malaysia. This application has successfully reduced participant registering time up to 80%.",
      stackChips: [azureSQL, cSharp],
      stacks: [
        { label: "Framework", value: ".NET framework 4.5" },
        { label: "Programming Language", value: "C#" },
        { label: "Database", value: "Azure SQL" },
        {
          label: "Integrated Development Environment",
          value: "Microsoft Visual Studio 2015",
        },
      ],
      content:
        "A software project for 11th OISAA International Symposium Malaysia 2019. This native windows application has a main purpose to help Liason Officers and Public Relation team to store, manage, and monitor participants data across team members. It has two interfaces; admin portal; and participant self-checkin. An executable program can be installed in multiple device and it is connected to Azure SQL database. /n This system has helped the team to identify participants with unsettled problem and successfully reduced registering time up to 80 percent.",
      features: [
        "User authentication and role-based access",
        "Import participant data from excel sheet and csv file",
        "Search participant by name, university",
        "Portal and Check-in interface",
        "Generate report",
        "Create agenda session",
        "Admin can revoke session access",
      ],
      github: "https://github.com/alkafaiz/SIMY19Checkin",
      url: "",
      demo: "",
      featuredImg: "SIMY-cover.jpg",
    },
    // {
    //   title: "",
    //   excerpt: "",
    //   stacks: [{ label: "", value: "" }],
    //   stackChips: [],
    //   content: "",
    //   features: [],
    //   github: "",
    //   url: "",
    //   demo: "",
    // },
  ]
}
