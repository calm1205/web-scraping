import { object2String } from "./object2String.js";
import { fileDownload } from "./fileDownload.js";

export type CsvObject = {
  name: string;
  address: string;
  phoneNumber: string;
  webSite: string;
};

export const exportCsv = (input: CsvObject[]) => {
  const csvString = object2String(input);

  try {
    fileDownload({
      content: csvString,
      filename: "output.csv",
    });
  } catch (err) {
    console.error(err);
  }
};
