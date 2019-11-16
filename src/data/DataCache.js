import axios from "axios";

const dataObject = {};

let dataDownloaded = false;

const downloadData = async () => {
    if(dataDownloaded) {
        return dataObject;
    }

    dataDownloaded = true;

    // Download the data
    dataObject.projects = (await axios.get("getprojects.php")).data.projects;

    return dataObject;
};

export default dataObject;

export { downloadData };