const successResponse = (req, res, data) => {
  res.status(200).json({
    error: false,
    success: true,
    data
  })
};


const failResponse = (req, res, statusCode, data) => {
  res.status(statusCode).json({
    error: false,
    success: false,
    data
  })
};


const errorResponse = (req, res, statusCode = 500, data) => {
  console.log(data);
  res.status(statusCode).json({
    error: true,
    success: false,
    data
  });
};

module.exports = {
  successResponse,
  errorResponse,
  failResponse
}
