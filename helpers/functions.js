import moment from "moment";

export const formatDate = (date, dateFormat = "LL") =>
  date && moment(date).format(dateFormat);

export const formatDescription = (description) => {
  return { __html: description.replace(/\n/g, "<br />") };
};
