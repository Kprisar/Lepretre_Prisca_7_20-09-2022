const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    return cb(null, file.originalname);
  },
});

module.exports = multer({ storage: storage }).single("file");
