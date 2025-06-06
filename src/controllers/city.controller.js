const CityService = require("../services/index.js");
const {
  requestHandler,
  asyncHandlerPromise,
} = require("../utils/asyncHandler.js");
const cityService = new CityService.CityService();

const create = requestHandler(async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: error.message,
    });
  }
});

// Delete
const destroy = asyncHandlerPromise(async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully created a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete city" || error.message,
    });
  }
});
//update a city
const update = asyncHandlerPromise(async (req, res) => {
  try {
    try {
      const city = await cityService.updateCity(req.body);
      return res.status(201).json({
        data: city,
        success: true,
        message: "Successfully created a city",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: error.message,
      });
    }
  } catch (error) {}
});
module.exports = {
  create,
  destroy,
};
