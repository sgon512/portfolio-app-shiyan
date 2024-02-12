import { useForm } from "react-hook-form";

const PortfolioForm = ({
  onSubmit,
  initialData = {},
  buttonLabel = "Create",
}) => {
  // transfer  format YYYY-MM-DD，if exist
  const formattedInitialData = {
    ...initialData,
    startDate: initialData.startDate
      ? new Date(initialData.startDate).toISOString().split("T")[0]
      : "",
    endDate: initialData.endDate
      ? new Date(initialData.endDate).toISOString().split("T")[0]
      : "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formattedInitialData });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          type="text"
          className="form-control"
          id="title"
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          {...register("company", { required: "Company is required" })}
          type="text"
          className="form-control"
          id="company"
        />
        {errors.company && (
          <p style={{ color: "red" }}>{errors.company.message}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          {...register("companyWebsite", {
            required: "Company Website is required",
          })}
          type="text"
          className="form-control"
          id="companyWebsite"
        />
        {errors.companyWebsite && (
          <p style={{ color: "red" }}>{errors.companyWebsite.message}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          {...register("location")}
          type="text"
          className="form-control"
          id="location"
        />
      </div>
      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          {...register("jobTitle", { required: "Job Title is required" })}
          type="text"
          className="form-control"
          id="jobTitle"
        />
        {errors.jobTitle && (
          <p style={{ color: "red" }}>{errors.jobTitle.message}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description")}
          rows="5"
          className="form-control"
          id="description"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input
          {...register("startDate")}
          type="date"
          className="form-control"
          id="startDate"
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input
          {...register("endDate")}
          type="date"
          className="form-control"
          id="endDate"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {buttonLabel}
      </button>
    </form>
  );
};

export default PortfolioForm;
