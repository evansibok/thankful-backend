// ERROR VARIABLE INITIALIZATION (SHOULD HAVE ITS OWN FILE)
// const generalError = {
//   error: [
//     {
//       type: 'company-error',
//       title: 'value',
//       code: 400,
//       message: "Company could not be created!"
//     },
//     {
//       type: 'general-error',
//       title: 'value',
//       code: 400,
//       message: "something",
//     }
//   ]
// }

// ERROR WRAPPER CREATION (SHOULD HAVE IT'S OWN FILE)

// function errorWrapper(errType = 'general-error') {
//   // return genErr.filter((e) => e.errorType.type === errType);
//   return generalError.error.filter(e => e.type === errType);
// }

// SAMPLE USAGE IN A CONTROLLER FILE

// const CompaniesDb = require("./companies-model");

// function createCompany(req, res) {
//   const company = req.body;
//   const { id } = req.user;

//   const newCompany = { ...company, admin_id: id };

//   CompaniesDb.add(newCompany)
//     .then(company => {
//       res.status(201).json(company);
//     })
//     .catch(() => {
//       res.status(400).json(errorWrapper()); // Error Wrapper usage

//       // throw Error(errorWrapper());
//     });
// }