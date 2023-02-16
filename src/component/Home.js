import Notes from "./Notes";

export const Home = () => {
  
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note.</h1>
        <form>
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </div>
        </form>
      </div>
      <Notes/>
    </div>
  );
};
