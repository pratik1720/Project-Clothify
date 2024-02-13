const Contact=()=>{

    return (
        <div className="container mt-5" style={{width:"600px" ,margin:"auto"}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 align="center" className="card-title">Contact Us</h2>
                <br></br>
                <form>
                 
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"><b>Name:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="abc"
                    //  value={Name}
                    //  onChange={(e) => setName(e.target.value)}
                      required
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailId" className="form-label"><b>Email Address:</b></label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailId"
                      placeholder="abc@gmail.com"
                    //  value={emailId}
                    //   onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label"><b>Message:</b></label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter Message"
                    //   value={username}
                    //  onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                    
                  <div className="d-grid">
                    <button
                      type="submit"
                    //   className="btn btn-primary btn-lg"
                    //  onClick={handleRegistration}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    )
}

export default Contact;