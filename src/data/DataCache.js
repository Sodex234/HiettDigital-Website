// import axios from "axios";
import projects from "./_projects";

const dataObject = {};

let dataDownloaded = false;

const downloadData = async () => {
  if (dataDownloaded) {
    return dataObject;
  }

  dataDownloaded = true;

  // Download the data
  // dataObject.projects = (await axios.get("getprojects.php")).data.projects;
  dataObject.projects = projects; // TODO: putting this here as we now have pipelines.

  return dataObject;
};

export default dataObject;

export {downloadData};