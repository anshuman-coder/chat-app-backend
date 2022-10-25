const { errorResponse, failResponse, successResponse } = require("../Utils/response");
const publicFuncs = require("../funcs/public.funcs");

const registerUser = async (req, res) => { 
  try {
    const { userName, email, password } = req.body;

    if (!userName) return failResponse(req, res, 400, "no username!");
    if (!email) return failResponse(req, res, 400, "no email!");

    if (!password) return failResponse(req, res, 400, "no password");

    const result = await publicFuncs.registerUser(req.body);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, 500, error);
  }
}

module.exports = {
  registerUser
};