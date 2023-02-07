const model = require("../models");

const readXlsxFile = require("read-excel-file/node");

// const upload = async (req, res) => {
//   try {
//     if (req.file == undefined) {
//       return res.status(400).send("Please upload an excel file!");
//     }

//     let path = __basedir + "/file-upload/uploads/" + req.file.filename;

//     readXlsxFile(path).then((rows) => {
//       // skip header
//       rows.shift();

//       let userDetail = [];

//       rows.forEach((row) => {
//         let user = {
//           name: row[0],
//           email: row[1],
//           date_of_birth: row[2],
//           date_of_joining: row[3],
//           wedding_anniversary: row[4],
//         };

//         userDetail.push(user);
//       });
//       model.AnniversariesAndBirthdays.bulkCreate(userDetail)
//         .then(() => {
//           res.status(200).send({
//             message: "Uploaded the file successfully: " + req.file.originalname,
//           });
//         })
//         .catch((error) => {
//           res.status(500).send({
//             message: "Fail to import data into database!",
//             error: error.message,
//           });
//         });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Could not upload the file: " + req.file.originalname,
//     });
//   }
// };

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path = __basedir + "/file-upload/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();

      let userDetail = [];

      rows.forEach((row) => {
        let user = {
          day: row[0],
          month: row[1],
          birthday_url: row[2],
          work_anniversary_url: row[3],
          marriage_anniversary_url: row[4],
        };

        userDetail.push(user);
      });
      model.DayImageMapping.bulkCreate(userDetail)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

module.exports = {
  upload,
};
