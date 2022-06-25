class JobService {
  async getJobs(): Promise<any> {
    const response = await fetch("http://localhost:3004/joboffers");
    return await response.json().then(response => {
      return response;
    });
  }
}

export default new JobService();
