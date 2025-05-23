const { CityRepository } = require("../repository/city-repository.js");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log(`something went wrong in the repository layer`);
      throw { error };
    }
  }
  async deleteCity() {
    try {
      const response = this.CityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log(`something went wrong in the repository layer`);
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log(`something went wrong in the repository layer`);
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log(`something went wrong in the repository layer`);
      throw { error };
    }
  }
}

module.exports = CityService;
